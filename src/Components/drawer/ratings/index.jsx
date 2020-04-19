import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../common/Spinner/index';
import { GET_ALL_RATINGS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import Ratings from './Ratings.jsx';
import useActivePageState from '../../../customHooks/useAcitvePageState';

const RatingsContainer = () => {
  const limit = 50;
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_ALL_RATINGS, {
    variables: { limit, skip: ((activePageNumber - 1) * limit) },
    notifyOnNetworkStatusChange: true,
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.ratings) {
    const { users } = data.ratings;
    const { ratingsUpdatedTill } = data.ratings;
    return (
      <div className="mw7 center pa3">
        <Ratings
          users={users}
          activePageNumber={activePageNumber}
          limit={limit}
          ratingsUpdatedTill={ratingsUpdatedTill}
        />
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.ratings.pages}
            activePageNumber={activePageNumber}
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
