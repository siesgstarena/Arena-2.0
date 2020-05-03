import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from '@material/react-switch';
import { Headline6, Headline4, Body1 } from '@material/react-typography';
import './settings.scss';

const EmailSettings = ({ notifications, email }) => {
  const [allowNotifications, setAllowNotifications] = useState(notifications.activities);
  const [allowAnnouncements, setAllowAnnouncements] = useState(notifications.updates);
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
        checked={allowNotifications}
        onChange={event => setAllowNotifications(event.target.value)}
      />
      <Body1 className="mt0 mid-gray">We’ll email you when there are notifications on your posts</Body1>
      <hr className="ma0" style={{ borderColor: '#FFFFFF' }} />
      <Headline6 className="mt3 mb0">Product and editorial announcements</Headline6>
      <Switch
        className="react-switch-alternate fr"
        nativeControlId="my-switch"
        checked={allowAnnouncements}
        onChange={event => setAllowAnnouncements(event.target.value)}
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
