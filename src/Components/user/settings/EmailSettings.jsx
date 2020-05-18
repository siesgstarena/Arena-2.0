import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Headline6, Headline4, Body1 } from '@material/react-typography';
import { useApolloClient } from '@apollo/react-hooks';
import Switch from '@material/react-switch';
import { UPDATE_NOTIFICATION } from '../../../graphql/mutations';
import './settings.scss';
import { GET_PROFILE_DETAILS } from '../../../graphql/queries';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const EmailSettings = ({ notifications, email }) => {
  const client = useApolloClient();
  const { userId } = useParams();
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const handleActivitiesChange = async () => {
    const { data } = await client.mutate({
      mutation: UPDATE_NOTIFICATION,
      variables: {
        type: 'activities',
        set: !notifications.activities,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.updateNotification.success) {
          try {
            const { profilePage } = cache.readQuery({
              query: GET_PROFILE_DETAILS,
              variables: { id: userId, findBy: 'ID' },
            });
            cache.writeQuery({
              query: GET_PROFILE_DETAILS,
              variables: { id: userId, findBy: 'ID' },
              data: {
                profilePage: {
                  ...profilePage,
                  user: {
                    ...profilePage.user,
                    notifications: {
                      ...profilePage.user.notifications,
                      activities: !notifications.activities,
                    },
                  },
                },
              },
            });
          } catch {
            console.log('No entry found in the cache.');
          }
        }
      },
    });
    if (isSessionExpired(data.updateNotification)) {
      redirectOnSessionExpiredAfterRender();
    }
  };
  const handleUpdatesChange = async () => {
    const { data } = await client.mutate({
      mutation: UPDATE_NOTIFICATION,
      variables: {
        type: 'updates',
        set: !notifications.updates,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.updateNotification.success) {
          try {
            const { profilePage } = cache.readQuery({
              query: GET_PROFILE_DETAILS,
              variables: { id: userId, findBy: 'ID' },
            });
            cache.writeQuery({
              query: GET_PROFILE_DETAILS,
              variables: { id: userId, findBy: 'ID' },
              data: {
                profilePage: {
                  ...profilePage,
                  user: {
                    ...profilePage.user,
                    notifications: {
                      ...profilePage.user.notifications,
                      updates: !notifications.updates,
                    },
                  },
                },
              },
            });
          } catch {
            console.log('No entry found in the cache.');
          }
        }
      },
    });
    if (isSessionExpired(data.updateNotification)) {
      redirectOnSessionExpiredAfterRender();
    }
  };
  return (
    <div>
      <Headline4 className="purple mb2">Email Settings</Headline4>
      <Headline6 className="mt3 mb0">Your Email</Headline6>
      <Body1 className="mt0 mid-gray">{email}</Body1>
      <hr className="ma0" style={{ borderColor: '#FFFFFF' }} />
      <Headline6 className="mt3 mb0">Notifications on your content</Headline6>
      <Switch
        className="react-switch-alternate fr"
        nativeControlId="my-switch"
        checked={notifications.activities}
        onChange={handleActivitiesChange}
      />
      <Body1 className="mt0 mid-gray">We’ll email you when there are notifications on your posts</Body1>
      <hr className="ma0" style={{ borderColor: '#FFFFFF' }} />
      <Headline6 className="mt3 mb0">Product and editorial announcements</Headline6>
      <Switch
        className="react-switch-alternate fr"
        nativeControlId="my-switch"
        checked={notifications.updates}
        onChange={handleUpdatesChange}
      />
      <Body1 className="mt0 mid-gray">We’ll email you when we have news to share about content and product features on SIESGST arena, or questions related to user research.</Body1>
      <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
    </div>
  );
};

EmailSettings.propTypes = {
  notifications: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
};

export default EmailSettings;
