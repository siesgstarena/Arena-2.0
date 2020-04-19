import React from 'react';
import ProblemsTable from './ProblemsTable';
import SubmissionDetails from './SubmissionDetails';
import 'tachyons';

const ContestDashboard = () => (
  <div>
    <ProblemsTable />
    <SubmissionDetails />
  </div>
);

export default ContestDashboard;
