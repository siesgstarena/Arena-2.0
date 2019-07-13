import React from 'react';
import { Headline6, Body1, Body2 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import topics from './topics';
import welcomeImage from '../welcomePage/assets/mbri-add-submenu.svg';
import './index.scss';

const WelcomePage = () => {
  const topicsArray = topics.map(topic => (
    <Link key={topic.id} to={`/playlists/topic/${topic.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div key={topic.id} className="pointer ma0 br4 mb3 b--purple ba pa3 hover-background-color">
        <Body2 className="fr gray">
          {topic.date}
        </Body2>
        <Body1 className="">
          {topic.name}
        </Body1>
        <Body1 className="mid-gray">
          {topic.description}
        </Body1>
        <Body2 className="gray">
          {topic.author}
        </Body2>
      </div>
    </Link>
  ));

  return (
    <div className="center pa2 mt5 mw7">
      <img height="auto" width="55px" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="welcome" src={welcomeImage} />
      <Headline6 className="purple mt0 mb5 tc">Playlists Home</Headline6>
      <div className="">
        {topicsArray}
      </div>
    </div>
  );
};

export default WelcomePage;
