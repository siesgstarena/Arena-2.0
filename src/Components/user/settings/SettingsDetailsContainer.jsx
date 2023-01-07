import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_SETTINGS_PAGE_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import Social from './Social';
import EmailSettings from './EmailSettings';
import Account from './Account';
import LoadingInfoArray from '../../common/LoadingInfoArray';

const SettingsDetailsContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { userId } = useParams();
  const { loading, error, data } = useQuery(GET_SETTINGS_PAGE_DETAILS, {
    variables: {
      id: userId,
      findBy: 'ID',
    },
  });
  if (loading) return <LoadingInfoArray count={3} />;
  if (error) return <SomethingWentWrong message="An error has been encountered" />;
  if (data.profilePage.user.username) {
    const { codechef, codeforces, github, username, updates, activities, email } =
      data.profilePage.user;
    const social = { codechef, codeforces, github };
    const notifications = { updates, activities };
    return (
      <div>
        <Account username={username} />
        <Social socialDetails={social} />
        <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
        <EmailSettings notifications={notifications} email={email} />
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

export default SettingsDetailsContainer;
