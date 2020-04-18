import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CONTEST_HOMEPAGE_DETAILS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import ContestsSchedule from './ContestsSchedule';
import Spinner from '../../../common/Spinner/index';

const ContestScheduleContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_CONTEST_HOMEPAGE_DETAILS);

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.contests) {
    const { contests } = data;
    return (
      <ContestsSchedule
        contests={contests}
      />
    );
  }
  if (isSessionExpired(data.contests)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default ContestScheduleContainer;
