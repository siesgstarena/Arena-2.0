import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { GET_ADMIN_DASHBOARD_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import ContestDashboard from './ContestDashboard';
import loadingData from './loadingData';

const ContestDashboardContainer = () => {
  const { contestId } = useParams();
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const [snackbarMessage, setSnackbarMessage] = useState(state && state.snackbarMessage ? state.snackbarMessage : '');
  // Deleting the snackbarMessage so that it is not displayed on every refresh
  if (state && state.snackbarMessage) {
    delete state.snackbarMessage;
    history.replace({ location, state });
  }
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data, refetch,
  } = useQuery(GET_ADMIN_DASHBOARD_DETAILS, {
    variables: { code: contestId },
  });

  if (loading) {
    const {
      contest, stats, announcement, problems,
    } = loadingData;
    return (
      <ContestDashboard
        contest={contest}
        stats={stats}
        announcement={announcement}
        setSnackbarMessage={setSnackbarMessage}
        snackbarMessage={snackbarMessage}
        problems={problems}
        refetch={refetch}
      />
    );
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
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
        refetch={refetch}
      />
    );
  }
  if (isSessionExpired(data.adminDashboard)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message={data.adminDashboard.message} />;
};

export default ContestDashboardContainer;
