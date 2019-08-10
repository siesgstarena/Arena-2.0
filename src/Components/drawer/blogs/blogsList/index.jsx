import React from 'react';
import { Headline4 } from '@material/react-typography';
import BlogCard from './BlogCard';
import blogs from './blogs';

const BlogsList = () => {
  const BlogsArray = blogs.map(blog => (
    <BlogCard
      key={blog.id}
      tags={blog.tags}
      id={blog.id}
      date={blog.date}
      name={blog.name}
      timeToRead={blog.timeToRead}
      author={blog.author}
      updated={blog.updated}
    />
  ));
  return (
    <div className="mw7 ma3 pa2 center">
      <Headline4 className="purple">SIESGSTarena&apos;s Blogs</Headline4>
      {BlogsArray}
    </div>
  );
};

export default BlogsList;
