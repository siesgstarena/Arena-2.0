import React, { useState } from 'react';
import Select from '@material/react-select';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';

const TestProblem = () => {
  const [contest, setContest] = useState('SRM01');
  const onContestChange = (index, item) => (
    setContest(item.getAttribute('data-value'))
  );
  const contests = [
    {
      label: 'Single Round Match #01',
      value: 'SRM01',
    },
    {
      label: 'Single Round Match #02',
      value: 'SRM02',
    },
    {
      label: 'Single Round Match #03',
      value: 'SRM03',
    },
  ];

  return (
    <div className="mw7 center ma1">
      <Headline4 className="purple mt4 mb0 ml1"> Update Ratings</Headline4>
      <Body2 className="mid-gray mt2 mb4 ml1">Ratings will be changed using Elo Ratings Algorithm</Body2>
      <Select
        className="w-100"
        notchedOutlineClassName="pa1"
        enhanced
        outlined
        label="Select Contest"
        value={contest}
        options={contests}
        onEnhancedChange={onContestChange}
      />
      <Button className="ma1 mt3 mb5" raised>
        Update
      </Button>
    </div>
  );
};

export default TestProblem;
