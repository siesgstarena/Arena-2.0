import React from 'react';
import PropTypes from 'prop-types';
import ContestCard from './ContestCard';
import { convertDate, convertTime, differenceInTwoDates } from '../../../commonFunctions';


const ContestCardsArray = ({ contests, setSnackbarMessage }) => {
  const contestsArray = contests.map(contest => (
    <ContestCard
      code={contest.code}
      key={contest._id}
      name={contest.name}
      setSnackbarMessage={setSnackbarMessage}
      startTime={`${convertDate(contest.startsAt)}, ${convertTime(contest.startsAt)}`}
      endTime={`${convertDate(contest.endsAt)}, ${convertTime(contest.endsAt)}`}
      duration={differenceInTwoDates(contest.endsAt, contest.startsAt)}
    />
  ));

  return (
    <div>
      {contestsArray}
    </div>
  );
};

ContestCardsArray.propTypes = {
  contests: PropTypes.array.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ContestCardsArray;
