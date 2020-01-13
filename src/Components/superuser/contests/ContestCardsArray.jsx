import React from 'react';
import PropTypes from 'prop-types';
import ContestCard from './ContestCard';
import { pastContests as contests } from '../../drawer/contests/schedule/contests';

const ContestCardsArray = ({ history, location, setSnackbarMessage }) => {
  const contestsArray = contests.map(contest => (
    <ContestCard
      location={location}
      setSnackbarMessage={setSnackbarMessage}
      history={history}
      key={contest.id}
      name={contest.contestName}
      id={contest.id}
      startTime={contest.start}
      duration={contest.duration}
    />
  ));

  return (
    <div>
      {contestsArray}
    </div>
  );
};

ContestCardsArray.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ContestCardsArray;
