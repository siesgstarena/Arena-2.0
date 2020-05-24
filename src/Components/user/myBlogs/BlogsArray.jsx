import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import BlogCard from '../../drawer/blogs/BlogCard/BlogCard';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import CustomSnackbar from '../../common/Snackbar/index';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import NoBlogs from './NoBlogs';

const BlogsArray = ({ blogs, showCreateButton = false, pageCount, isSuperuserRoute = false }) => {
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const [snackbarMessage, setSnackbarMessage] = useState(
    state && state.snackbarMessage ? state.snackbarMessage : ''
  );

  // This useEffect logic removes the snackbar message from the state
  // and thereby avoiding the snackbar message being showed everytime the user visits the website
  useEffect(() => {
    if (state && state.snackbarMessage) {
      delete state.snackbarMessage;
      history.replace({ location, state });
    }
  }, [history, location, state]);
  const activePageNumber = useActivePageState();
  return (
    <div>
      <div>
        {blogs.length !== 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              tags={blog.tags}
              id={blog._id}
              author={blog.userId.name}
              authorId={blog.userId._id}
              createdAt={blog.createdAt}
              updatedAt={blog.updatedAt}
              timeToRead={blog.timeToRead}
              title={blog.title}
              ratings={blog.userId.ratings}
              pinned={blog.pinned}
              setSnackbarMessage={setSnackbarMessage}
              isSuperuserRoute={isSuperuserRoute}
            />
          ))
        ) : (
          <NoBlogs showCreateButton={showCreateButton} />
        )}
        <CustomSnackbar setSnackbarMessage={setSnackbarMessage} snackbarMessage={snackbarMessage} />
        <div className="pt3">
          <PageCountDisplayer pageCount={pageCount} activePageNumber={activePageNumber} />
        </div>
      </div>
    </div>
  );
};

BlogsArray.propTypes = {
  blogs: PropTypes.array.isRequired,
  showCreateButton: PropTypes.bool,
  isSuperuserRoute: PropTypes.bool,
  pageCount: PropTypes.number.isRequired,
};

export default BlogsArray;
