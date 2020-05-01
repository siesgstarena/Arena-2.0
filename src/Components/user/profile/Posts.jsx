import React from 'react';
import myPosts from './myPosts';
import BlogCard from '../../drawer/blogs/BlogCard/BlogCard';

const Posts = () => {
  const myPostsArray = myPosts.map(myPost => (
    <BlogCard
      key={myPost.id}
      tags={myPost.tags}
      id={myPost.id}
      author={myPost.author}
      date={myPost.date}
      timeToRead={myPost.timeToRead}
      name={myPost.name}
    />
  ));

  return (
    <div className="pl1 mt3 pr1">
      {myPostsArray}
    </div>
  );
};

export default Posts;
