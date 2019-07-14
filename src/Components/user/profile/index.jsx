import React from 'react';
import Info from './Info';
import RatingsGraph from './RatingsGraph';
import Posts from './Posts';

const Profile = () => (
  <div className="mw7 center pa3 pt0">
    <Info />
    <RatingsGraph />
    <Posts />
  </div>
);

export default Profile;
