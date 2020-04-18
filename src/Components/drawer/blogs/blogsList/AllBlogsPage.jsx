import React from 'react';
import { Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import BlogCard from './BlogCard';

const AllBlogsPage = ({ blogs }) => {
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
    </div>
  );
};

AllBlogsPage.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default AllBlogsPage;
