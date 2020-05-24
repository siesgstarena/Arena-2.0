import React from 'react';
import SuperuserContainer from '../SuperuserContainer';
import AllBlogsPageContainer from '../../drawer/blogs/blogsList';

const SuperuserBlogContainer = () => (
  <div>
    <SuperuserContainer component={<AllBlogsPageContainer isSuperuserRoute />} />;
  </div>
);

export default SuperuserBlogContainer;
