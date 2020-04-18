import React from 'react';
import PropTypes from 'prop-types';
import { Headline6, Headline4 } from '@material/react-typography';
import ContestsTable from './ContestsTable';
import '../../../common/Table/index.scss';
import 'tachyons';

const ContestsScehdule = ({ contests }) => (
  <div className="pa2 mw8-ns center">
    <Headline4 className="purple mt2">Contests</Headline4>
    <Headline6 className="purple mb2 mt1">Current or Upcoming Contests</Headline6>
    <ContestsTable contests={contests.contests} />
    <Headline6 className="purple mb2">Past Contests</Headline6>
    <ContestsTable contests={contests.finishedContests} />
  </div>
);

ContestsScehdule.propTypes = {
  contests: PropTypes.object.isRequired,
};

export default ContestsScehdule;
