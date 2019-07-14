import React from 'react';
import { Headline6, Body1, Body2 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import myPosts from './myPosts';

const Posts = () => {
  const myPostsArray = myPosts.map((myPost) => {
    const tags = myPost.tags.map(tag => (
      <Link key={tag} to={`/search?q=${tag}`} className="pointer">
        <span className="ba dib br4 pa1 f6 black-60 mr2">
          {tag}
        </span>
      </Link>
    ));
    return (
      <div key={myPost.id} className="ma0 br4 mb3 b--purple ba pa3 hover-background-color">
        <Body2 className="fr gray">
          {myPost.date}
        </Body2>
        <Link to={`/blog/${myPost.id}`} className="no-underline black">
          <Body1 className="">
            {myPost.name}
          </Body1>
        </Link>
        <Body1 className="">
          {tags}
        </Body1>
        <Body2 className="gray mt0 fr">
          {myPost.timeToRead}
        </Body2>
        <Body2 className="gray mb1">
          {myPost.author}
        </Body2>
      </div>
    );
  });

  return (
    <div className="pl4 pr4">
      <Headline6 className="purple">Posts</Headline6>
      {myPostsArray}
    </div>
  );
};

export default Posts;
