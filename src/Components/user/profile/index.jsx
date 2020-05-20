import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import Info from './Info';
import RatingsGraph from './RatingsGraph';
import ProfileTabBar from './ProfileTabBar';
import { GET_PROFILE_DETAILS } from '../../../graphql/queries';
import ProfileLoadingSkeleton from './ProfileLoadingSkeleton';

const ProfileContainer = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(GET_PROFILE_DETAILS, {
    variables: {
      findBy: 'ID',
      id: userId,
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
  return undefined;
};

export default ProfileContainer;
