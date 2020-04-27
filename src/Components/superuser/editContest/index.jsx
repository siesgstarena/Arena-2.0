import React, { useState } from 'react';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import ContestDetails from '../createContest/ContestDetails';

const EditContest = () => {
  const intialFormDetails = {
    code: '',
    type: 'round',
    name: '',
    description: '',
    admins: [{ value: '1', label: 'ac030540@gmail.com' }],
    start: new Date(),
    end: new Date(),
    solutionVisibility: 'after',
  };
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  return (
    <div className="mw7 center pa2">
      <Headline4 className="purple mb1 mt3">Edit Contest</Headline4>
      <Body2 className="mt0 mid-gray mb4">Edit a Single Round Match or Long Queue Contest</Body2>
      <ContestDetails formDetails={formDetails} setFormDetails={setFormDetails} adminOptions={['1']} />
      <Button
        className="ma1 mt3"
        raised
      >
        Edit Contest
      </Button>
    </div>
  );
};

export default EditContest;
