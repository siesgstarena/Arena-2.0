import React from 'react';
import SubmissionDetails from './SubmissionDetails';
import DashboardContainer from './DashboardContainer';

const DashboardPage = () => {
  document.title = 'SIESGSTArena | Dashboard';
  return (
    <div>
      <DashboardContainer />
      <SubmissionDetails />
    </div>
  );
};

export default DashboardPage;
