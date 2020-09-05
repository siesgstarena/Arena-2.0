import React from 'react';
import PropTypes from 'prop-types';
import { format, formatDistance } from 'date-fns';
import ContestCard from './ContestCard';

const ContestCardsArray = ({ contests, setSnackbarMessage }) => {
  const contestsArray = contests.map((contest) => (
    <ContestCard
      code={contest.code}
      key={contest._id}
      name={contest.name}
      setSnackbarMessage={setSnackbarMessage}
      startTime={format(new Date(Number(contest.startsAt)), 'MMM d, yyyy hh:mm:ss aa')}
      endTime={format(new Date(Number(contest.endsAt)), 'MMM d, yyyy hh:mm:ss aa')}
      duration={formatDistance(
        new Date(Number(contest.endsAt)),
        new Date(Number(contest.startsAt))
      )}
    />
  ));

  return <div>{contestsArray}</div>;
};

ContestCardsArray.propTypes = {
  contests: PropTypes.array.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ContestCardsArray;
