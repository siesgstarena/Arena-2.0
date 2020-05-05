import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { GET_ADMIN_DASHBOARD_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import ContestDashboard from './ContestDashboard';
import loadingData from './loadingData';
import AdminContainer from '../AdminContainer';
import useSentry from '../../../customHooks/useSentry';
import ContestLoadingScreen from './ContestLoadingScreen';

const ContestDashboardContainer = () => {
  const { contestId } = useParams();
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const { logError } = useSentry();
  const [snackbarMessage, setSnackbarMessage] = useState(state && state.snackbarMessage ? state.snackbarMessage : '');
  // Deleting the snackbarMessage so that it is not displayed on every refresh
  if (state && state.snackbarMessage) {
    delete state.snackbarMessage;
    history.replace({ location, state });
  }
  const {
    loading, error, data, refetch,
  } = useQuery(GET_ADMIN_DASHBOARD_DETAILS, {
    variables: { code: contestId },
  });

  if (loading) return <ContestLoadingScreen />;
  if (error) {
    logError('adminDashboard query', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.adminDashboard.contest) {
    const response = data.adminDashboard;
    const { contest } = response;
    const { problems } = response;
    const { announcement } = contest;
    const { totalCount, acceptedCount, usersCount } = response;
    const stats = {
      totalCount,
      acceptedCount,
      usersCount,
    };
    return (
      <AdminContainer contestCode={contestId} loadingScreen={<ContestLoadingScreen />}>
        <ContestDashboard
          contest={contest}
          stats={stats}
          announcement={announcement}
          setSnackbarMessage={setSnackbarMessage}
          snackbarMessage={snackbarMessage}
          problems={problems}
          refetch={refetch}
        />
      </AdminContainer>
    );
  }

  // Random errors not handled by graphql
  logError('adminDashboard query', { ...data, ...error });
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default ContestDashboardContainer;
