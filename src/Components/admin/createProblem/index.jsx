/* eslint-disable no-param-reassign */
import React from 'react';
import Button from '@material/react-button';
import { Headline4, Body2 } from '@material/react-typography';
import ProblemDetails from './ProblemDetails';

const CreateProblem = () => (
  <div className="mw7 center pa2">
    <Headline4 className="ma0 mt3 purple mb1">Create Problem</Headline4>
    <Body2 className="ma0 ml1  mid-gray mb4">Create Problem for Single Round Match #01</Body2>
    <ProblemDetails />
    <Button raised>
        Create Problem
    </Button>
  </div>
);

export default CreateProblem;
