import React from 'react';
import PropTypes from 'prop-types';
import EnhancedBlogCard from '../EnhancedBlogCard/EnhancedBlogCard';

const AllBlogsPage = ({ blogs, setSnackbarMessage }) => {
  // const [snackbarMessage, setSnackbarMessage] = useState('');
  const BlogsArray = blogs.map(
    blog => (
      <EnhancedBlogCard
        setSnackbarMessage={setSnackbarMessage}
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
    ),
  );
  return (
    <div>
      { BlogsArray }
    </div>

  );
};
AllBlogsPage.propTypes = {
  blogs: PropTypes.object.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default AllBlogsPage;
