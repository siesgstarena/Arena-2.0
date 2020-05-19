import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { GET_ADMIN_DASHBOARD_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import ContestDashboard from './ContestDashboard';
import useSentry from '../../../customHooks/useSentry';
import ContestLoadingScreen from './ContestLoadingScreen';

const ContestDashboardContainer = () => {
  const { contestId } = useParams();
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const { logError } = useSentry();
  const [snackbarMessage, setSnackbarMessage] = useState(
    state && state.snackbarMessage ? state.snackbarMessage : ''
  );
  // Deleting the snackbarMessage so that it is not displayed on every refresh
  useEffect(() => {
    if (state && state.snackbarMessage) {
      delete state.snackbarMessage;
      history.replace({ location, state });
    }
  }, [history, location, state]);
  const { loading, error, data } = useQuery(GET_ADMIN_DASHBOARD_DETAILS, {
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
      <ContestDashboard
        contest={contest}
        stats={stats}
        announcement={announcement}
        setSnackbarMessage={setSnackbarMessage}
        snackbarMessage={snackbarMessage}
        problems={problems}
      />
    );
  }

  return <SomethingWentWrong message={data.adminDashboard.message} />;
};

export default ContestDashboardContainer;
