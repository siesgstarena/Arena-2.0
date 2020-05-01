import React from 'react';
import Info from './Info';
import RatingsGraph from './RatingsGraph';
import ProfileTabBar from './ProfileTabBar';

const Profile = () => (
  <div className="mw7 center pa3 pt0">
    <Info />
    <RatingsGraph />
    <ProfileTabBar />
  </div>
);

export default Profile;
