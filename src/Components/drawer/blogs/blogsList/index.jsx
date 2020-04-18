import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_BLOGS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import AllBlogsPage from './AllBlogsPage';
import Spinner from '../../../common/Spinner/index';

const AllBlogsPageContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_ALL_BLOGS);

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.blogs) {
    const { blogs } = data;
    return (
      <AllBlogsPage
        blogs={blogs}
      />
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
