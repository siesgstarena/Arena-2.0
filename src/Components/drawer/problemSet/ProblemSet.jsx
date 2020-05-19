import React from 'react';
import PropTypes from 'prop-types';
import { Headline4, Body1 } from '@material/react-typography';
import ProblemSetTable from './ProblemSetTable';

const ProblemSet = ({ problems }) => (
  <div className="mw7 center pa1 pt0">
    <Headline4 className="purple mb0">Problems</Headline4>
    <Body1 className="mid-gray">Problems from previous contests</Body1>
    <ProblemSetTable problemsList={problems} />
  </div>
);

ProblemSet.propTypes = {
  problems: PropTypes.array.isRequired,
};

export default ProblemSet;
