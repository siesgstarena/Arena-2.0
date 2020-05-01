import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import Info from './Info';
import RatingsGraph from './RatingsGraph';
import ProfileTabBar from './ProfileTabBar';
import Spinner from '../../common/Spinner/index';
import { GET_PROFILE_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const ProfileContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { userId } = useParams();
  const {
    loading, error, data,
  } = useQuery(GET_PROFILE_DETAILS, {
    variables: {
      id: userId,
    },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.profilePage) {
    const userDetails = data.profilePage.user;
    const ratingChanges = data.profilePage.changes;
    const { contests } = data.profilePage;
    const { blogPages } = data.profilePage;
    const { submissionPages } = data.profilePage;
    const { submissions } = data.profilePage;
    const { blogs } = data.profilePage;
    return (
      <div className="mw7 pa2 center pt0">
        <Info userDetails={userDetails} />
        <RatingsGraph contests={contests} ratingChanges={ratingChanges} />
        <ProfileTabBar
          blogPages={blogPages}
          submissionPages={submissionPages}
          blogs={blogs}
          submissions={submissions}
        />
      </div>
    );
  }
  if (isSessionExpired(data.profilePage)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default ProfileContainer;
