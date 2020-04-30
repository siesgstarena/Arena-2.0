import React from 'react';
import { Body1, Body2 } from '@material/react-typography';

const BlogHeader = () => (
  <div>
    <div style={{ display: 'inline-block' }}>
      <img
        src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp"
        alt="profile"
        style={{ height: '4em', width: '4em' }}
      />
    </div>
    <div style={{ display: 'inline-block' }}>
      <Body1 className="ma0">Swapnil Satish Shinde</Body1>
      <Body2 className="mid-gray ma0">How you look at it is pretty much how youll see it.</Body2>
      <Body2 className="mid-gray ma0">Sat 22 April 2020</Body2>
      <Body2 className="mid-gray ma0">Recent Activity: 3 hours ago. 4 min read</Body2>
    </div>
  </div>
);

export default BlogHeader;
