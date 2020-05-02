import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner/index';
import { GET_BLOGS_BY_USER } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import BlogCard from '../../drawer/blogs/BlogCard/BlogCard';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import CustomSnackbar from '../../common/Snackbar/index';

const PostsContainer = ({ user }) => {
  const limit = 3;
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const {
    loading, error, data,
  } = useQuery(GET_BLOGS_BY_USER, {
    variables: { limit, skip: ((activePageNumber - 1) * limit), id: user._id },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.blogByUser) {
    const { blogs } = data.blogByUser;
    return (
      <div className="pt3">
        {
          blogs.map(blog => (
            <BlogCard
              key={blog._id}
              tags={blog.tags}
              id={blog._id}
              author={user.name}
              authorId={user._id}
              createdAt={blog.createdAt}
              updatedAt={blog.updatedAt}
              timeToRead={blog.timeToRead}
              title={blog.title}
              ratings={user.ratings}
              setSnackbarMessage={setSnackbarMessage}
            />
          ))}
        <CustomSnackbar
          setSnackbarMessage={setSnackbarMessage}
          snackbarMessage={snackbarMessage}
        />
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.blogByUser.pages}
            activePageNumber={activePageNumber}
          />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.blogByUser)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

PostsContainer.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PostsContainer;
