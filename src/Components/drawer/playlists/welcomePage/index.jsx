import React from 'react';
import { Headline5, Body1 } from '@material/react-typography';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
import welcomeImage from './assets/mbri-add-submenu.svg';

const WelcomePage = ({ history }) => (
  <div className="center tc mt4 pa2" style={{ maxWidth: '400px' }}>
    <img height="auto" width="150px" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="welcome" src={welcomeImage} />
    <Headline5 className="purple mt0 mb5">Introducing Playlists</Headline5>
    <Body1 className="mb0">Playlists provides a guided, tutorial, hands-on coding experience of topics with fresh problem ideas.</Body1>
    <Body1 className="">Are you a beginner? Want to learn a new topic?</Body1>
    <Button
      className="ma4"
      outlined
      onClick={() => history.push('/playlists/home')}
    >
      Let&apos;s start!
    </Button>
  </div>
);

WelcomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default WelcomePage;
