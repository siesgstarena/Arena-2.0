import React from 'react';
import { Headline6 } from '@material/react-typography';
import myPosts from './myPosts';
import BlogCard from '../../drawer/blogs/blogsList/BlogCard';

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
    <div className="pl4 pr4">
      <Headline6 className="purple">Posts</Headline6>
      {myPostsArray}
    </div>
  );
};

export default Posts;
