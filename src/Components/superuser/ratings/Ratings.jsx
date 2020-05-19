import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import SelectingContest from './SelectingContest';

const SuperuserRatings = () => {
  const history = useHistory();
  const [contest, setContest] = useState('None');

  return (
    <div className="mw7 center ma1">
      <Headline4 className="purple mt4 mb0 ml1"> Update Ratings</Headline4>
      <Body2 className="mid-gray mt2 mb4 ml1">
        Ratings will be changed using Elo Ratings Algorithm
      </Body2>
      <SelectingContest contest={contest} setContest={setContest} />
      <Button
        className="ma1 mt3 mb5"
        raised
        onClick={() => history.push(`/superuser/ratings/${contest}/update`)}
      >
        Update
      </Button>
    </div>
  );
};

export default SuperuserRatings;
