import React from 'react';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import ContestDetails from '../createContest/ContestDetails';

const EditContest = () => (
  <div className="mw7 center pa2">
    <Headline4 className="purple mb1 mt3">Edit Contest</Headline4>
    <Body2 className="mt0 mid-gray mb4">Edit a Single Round Match or Long Queue Contest</Body2>
    <ContestDetails />
    <Button
      className="ma1 mt3"
      raised
    >
      Edit Contest
    </Button>
  </div>
);

export default EditContest;
