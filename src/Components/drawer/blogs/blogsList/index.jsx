import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_BLOGS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import AllBlogsPage from './AllBlogsPage';
import PageCountDisplayer from '../../../common/PageCountDisplayer';
import Spinner from '../../../common/Spinner/index';

const AllBlogsPageContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const limit = 15;
  const [activePageNumber, setActivePageNumber] = useState(1);
  const {
    loading, error, data, fetchMore, networkStatus,
  } = useQuery(GET_ALL_BLOGS, {
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
  if (data.blogs) {
    const { blogs } = data.blogs;
    return (
      <div className="mw7 ma3 pa2 center">
        <AllBlogsPage
          blogs={blogs}
        />
        <div>
          <PageCountDisplayer
            pageCount={data.blogs.pages}
            onLoadMore={onLoadMore}
            activePageNumber={activePageNumber}
            setActivePageNumber={setActivePageNumber}
            limit={limit}
          />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.blogs)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default AllBlogsPageContainer;
