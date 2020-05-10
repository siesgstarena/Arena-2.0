import React from 'react';
import { useParams } from 'react-router-dom';
import AdminContainer from '../AdminContainer';
import ContestLoadingScreen from './ContestLoadingScreen';
import ContestDashboardContainer from './ContestDashbaordContaier';

const ContestDashboardPage = () => {
  const { contestId } = useParams();
  // AdminContainer will check whether the user is admin or not and
  // if the user is admin only then the user will be allowed to see the
  // component
  return (
    <AdminContainer
      loadingScreen={<ContestLoadingScreen />}
      component={<ContestDashboardContainer />}
      contestCode={contestId}
    />
  );
};

export default ContestDashboardPage;
