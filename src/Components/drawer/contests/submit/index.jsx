import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_CONTEST_DASHBOARD } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import SubmitSolution from './SubmitSolution';
import Spinner from '../../../common/Spinner/index';

const SubmitContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const { loading, error, data } = useQuery(GET_CONTEST_DASHBOARD, {
    variables: { code: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.dashboard) {
    const problems = data.dashboard;
    // console.log(data.dashboard.problems, problems);
    return (
      <div>
        <SubmitSolution problems={problems} />
      </div>
    );
  }
  if (isSessionExpired(data.dashboard)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default SubmitContainer;
