import React from 'react';
import PropTypes from 'prop-types';
import ContestCard from './ContestCard';
import { pastContests as contests } from '../../drawer/contests/schedule/contests';

const ContestCardsArray = ({ setSnackbarMessage }) => {
  const contestsArray = contests.map(contest => (
    <ContestCard
      setSnackbarMessage={setSnackbarMessage}
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
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ContestCardsArray;
