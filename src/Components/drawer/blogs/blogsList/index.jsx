import React from 'react';
import { Headline4 } from '@material/react-typography';
import BlogCard from './BlogCard';
import blogs from './blogs';

const BlogsList = () => {
  const BlogsArray = blogs.map(myPost => (
    <BlogCard
      key={myPost.id}
      tags={myPost.tags}
      id={myPost.id}
      date={myPost.date}
      name={myPost.name}
      timeToRead={myPost.timeToRead}
      author={myPost.author}
      updated={myPost.updated}
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
