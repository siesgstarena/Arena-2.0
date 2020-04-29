import React from 'react';
import { Headline3, Body1 } from '@material/react-typography';
import Account from './Account';
import EmailSettings from './EmailSettings';
import Security from './Security';
import Social from './Social';

const Settings = () => (
  <div className="mw7 center pa3 pt0">
    <Headline3 className="purple mb0">Settings</Headline3>
    <Body1 className="mid-gray">All your privacy and account related settings will appear here</Body1>
    <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
    <Account />
    <Social />
    <EmailSettings />
    <Security />
  </div>
);

export default Settings;
