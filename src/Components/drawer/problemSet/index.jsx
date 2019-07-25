import React from 'react';
import { Headline4, Body1 } from '@material/react-typography';
import ProblemSetTable from './ProblemSetTable';

const ProblemSet = () => (
  <div className="mw7 center pa3 pt0">
    <Headline4 className="purple mb0">Problems</Headline4>
    <Body1 className="mid-gray">Problems from previous contests</Body1>
    <ProblemSetTable />
  </div>
);

export default ProblemSet;
