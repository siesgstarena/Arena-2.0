import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { GET_BLOGS_BY_USER } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import AuthContext from '../../../Contexts/AuthContext';
import useSentry from '../../../customHooks/useSentry';
import BlogsArray from '../myBlogs/BlogsArray';
import LoadingCardArray from '../../common/LoadingCardArray';
import { profileMyPostsLimit } from '../../../constants';

const PostsContainer = ({ user }) => {
  const limit = profileMyPostsLimit;
  const activePageNumber = useActivePageState();
  const { logError } = useSentry();
  const { authState } = useContext(AuthContext);
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_BLOGS_BY_USER, {
    variables: { limit, skip: (activePageNumber - 1) * limit, id: user._id },
  });
  if (loading) {
    return (
      <div className="pt3">
        <LoadingCardArray count={limit} />
      </div>
    );
  }
  if (error) {
    logError('blogByUser query', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.blogByUser) {
    const { blogs } = data.blogByUser;
    return (
      <div className="pt3">
        <BlogsArray
          showCreateButton={authState.user && authState.user.userId === user._id}
          blogs={blogs}
          pageCount={data.blogByUser.pages}
        />
      </div>
    );
  }
  if (isSessionExpired(data.blogByUser)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  logError('blogByUser query', { ...data, ...error });
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

PostsContainer.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PostsContainer;
