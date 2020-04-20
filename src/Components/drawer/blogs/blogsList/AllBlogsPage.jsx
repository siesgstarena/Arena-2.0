import React, { useState } from 'react';
import { Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import BlogCard from './BlogCard';
import CustomSnackbar from '../../../common/Snackbar/index';

const AllBlogsPage = ({ blogs }) => {
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const [snackbarMessage, setSnackbarMessage] = useState(state && state.snackbarMessage ? state.snackbarMessage : '');
  // Deleting the snackbarMessage so that it is not displayed on every refresh
  // This snackbar update part gives console errors. Need to have look as to why it is happening.
  // Whenever I create a new blog and moves to the /blogs route, I get this error.
  if (state && state.snackbarMessage) {
    delete state.snackbarMessage;
    history.replace({ location, state });
  }
  const BlogsArray = blogs.map(blog => (
    <BlogCard
      key={blog._id}
      tags={blog.tags}
      id={blog._id}
      createdAt={blog.createdAt}
      title={blog.title}
      timeToRead={blog.timeToRead}
      author={blog.userId.name}
      authorId={blog.userId._id}
      updatedAt={blog.updatedAt}
      ratings={blog.userId.ratings}
    />
  ));
  return (
    <div>
      <Headline4 className="purple">SIESGSTarena&apos;s Blogs</Headline4>
      {BlogsArray}
      <CustomSnackbar
        setSnackbarMessage={setSnackbarMessage}
        snackbarMessage={snackbarMessage}
      />
    </div>
  );
};

AllBlogsPage.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default AllBlogsPage;
