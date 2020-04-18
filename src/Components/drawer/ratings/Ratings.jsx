import React from 'react';
import { Headline4, Body2 } from '@material/react-typography';
import PropTypes from 'prop-types';
import RatingsTable from './RatingsTable';
import 'tachyons';

const Ratings = ({ users, activePageNumber, limit }) => (
  <div>
    <Headline4 className="purple mb2">Ratings</Headline4>
    <Body2 className="mid-gray ml1 mt2"> Ratings have been updated till SRM09 </Body2>
    <RatingsTable users={users} activePageNumber={activePageNumber} limit={limit} />
  </div>
);

Ratings.propTypes = {
  users: PropTypes.array.isRequired,
  activePageNumber: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default Ratings;
