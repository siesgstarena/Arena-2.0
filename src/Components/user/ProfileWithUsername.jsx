import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import Info from './profile/Info';
import RatingsGraph from './profile/RatingsGraph';
import ProfileTabBar from './profile/ProfileTabBar';
import { GET_PROFILE_DETAILS } from '../../graphql/queries';
import ProfileLoadingSkeleton from './profile/ProfileLoadingSkeleton';

const ProfileContainerWithUsername = () => {
  const { username } = useParams();
  const { loading, data } = useQuery(GET_PROFILE_DETAILS, {
    variables: {
      findBy: 'username',
      username,
    },
  });
  if (loading) return <ProfileLoadingSkeleton />;
  if (data.profilePage) {
    const userDetails = data.profilePage.user;
    const ratingChanges = data.profilePage.changes;
    const { contests } = data.profilePage;
    return (
      <div className="mw7 pa2 center pt0">
        <Info userDetails={userDetails} />
        <RatingsGraph contests={contests} ratingChanges={ratingChanges} />
        <ProfileTabBar user={userDetails} />
      </div>
    );
  }
  // code will never reach here
  return undefined;
};

export default ProfileContainerWithUsername;
