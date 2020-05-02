import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body1 } from '@material/react-typography';
import Button from '@material/react-button';

const NoBlogs = () => {
  const history = useHistory();
  return (
    <div className="tc">
      <img
        src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283327/arena/assets_webp/arena_assets_blog_create.webp"
        alt="no-blogs"
        style={{ width: '12em', height: '12em' }}
      />
      <Body1 className="mid-gray">There are no blog posts</Body1>
      <Button onClick={() => history.push('/blogs/create')} raised>Create Blog</Button>
    </div>
  );
};

export default NoBlogs;
