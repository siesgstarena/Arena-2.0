import React from 'react';
import { Headline4, Body2 } from '@material/react-typography';
import RatingsTable from './RatingsTable';
import 'tachyons';

const Ratings = () => (
  <div className="mw7 center pa3">
    <Headline4 className="purple mb2">Ratings</Headline4>
    <Body2 className="mid-gray ml1 mt2"> Ratings have been updated till SRM09 </Body2>
    <RatingsTable />
  </div>
);

export default Ratings;
