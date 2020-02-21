import React from 'react';
import ContestCard from './ContestCard';
import { pastContests as contests } from '../../drawer/contests/schedule/contests';


const ContestCardsArray = () => {
  const contestsArray = contests.map(contest => (
    <ContestCard
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

export default ContestCardsArray;
