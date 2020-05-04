import React from 'react';
import { Headline4 } from '@material/react-typography';
import RatingsContainer from './RatingsContainer';

const RatingsPage = () => (
  <div className="mw7 center pa2">
    <Headline4 className="purple mb2 mt2">Ratings</Headline4>
    <RatingsContainer />
  </div>
);

export default RatingsPage;
