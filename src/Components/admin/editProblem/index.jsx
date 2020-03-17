/* eslint-disable no-param-reassign */
import React from 'react';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import ProblemDetails from '../createProblem/ProblemDetails';

const CreateProblem = () => (
  <div className="mw7 center pa2">
    <Headline4 className="ma0 mt3 purple mb1">Edit Problem</Headline4>
    <Body2 className="ma0 ml1  mid-gray mb4">Edit Problem for Single Round Match #01</Body2>
    <ProblemDetails />
    <Button raised>
        Edit Problem
    </Button>
  </div>
);

export default CreateProblem;
