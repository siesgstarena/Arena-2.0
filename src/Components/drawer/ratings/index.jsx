import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../common/Spinner/index';
import { GET_ALL_RATINGS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import Ratings from './Ratings.jsx';

const RatingsContainer = () => {
  const limit = 50;
  const [activePageNumber, setActivePageNumber] = useState(1);
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data, fetchMore, networkStatus,
  } = useQuery(GET_ALL_RATINGS, {
    variables: { limit },
    notifyOnNetworkStatusChange: true,
  });
  const onLoadMore = (amountOfEntiresToBeSkipped) => {
    fetchMore({
      variables: {
        skip: amountOfEntiresToBeSkipped,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, fetchMoreResult);
      },
    });
  };
  if (networkStatus === 3) return <Spinner />;
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.ratings) {
    const { users } = data.ratings;
    return (
      <div className="mw7 center pa3">
        <Ratings users={users} activePageNumber={activePageNumber} limit={limit} />
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.ratings.pages}
            onLoadMore={onLoadMore}
            activePageNumber={activePageNumber}
            setActivePageNumber={setActivePageNumber}
            limit={limit}
          />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.ratings)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default RatingsContainer;
