import React from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';
import 'tachyons';

// Layout of Scoreboard page: DataTable , ContestDetails and Announcements
// referred the status page
const Scoreboard = ({ scoreboardDetails, problems }) => (
  <DataTable scoreboardDetails={scoreboardDetails} problems={problems} />
);

Scoreboard.propTypes = {
  problems: PropTypes.array.isRequired,
  scoreboardDetails: PropTypes.array.isRequired,
};


export default Scoreboard;
