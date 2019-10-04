import React from 'react';
import { Headline4, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';
import ResetSubmissionTable from './ResetSubmissionTable';

const ResetSubmissionStatus = (props) => {
  const { match } = props;
  return (
    <div className="pl5-ns pr5-ns pl2 pr2">
      <Headline4 className="purple mb0">Update Submission Status</Headline4>
      <Body1 className="mt2">Problem: SRM01B - Scooby Doo Is In Danger</Body1>
      <ResetSubmissionTable match={match} />
    </div>
  );
};

ResetSubmissionStatus.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ResetSubmissionStatus;
