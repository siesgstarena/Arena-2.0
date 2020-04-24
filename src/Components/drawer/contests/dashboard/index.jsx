import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_PROBLEMS_BY_CONTEST_CODE } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import ProblemsTable from './ProblemsTable';
import ContestTabBar from '../common/ContestTabBar';
import SubmissionDetails from './SubmissionDetails';
import Spinner from '../../../common/Spinner/index';

const ContestDashboardContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const {
    loading, error, data,
  } = useQuery(GET_PROBLEMS_BY_CONTEST_CODE, {
    variables: { contestCode: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.problemsByContestCode) {
    const problems = data.problemsByContestCode;
    // console.log(data.problemsByContestCode.problems, problems);
    return (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <ContestTabBar />
        </div>
        <ProblemsTable problems={problems} />
        <SubmissionDetails />
      </div>
    );
  }
  if (isSessionExpired(data.problemsByContestCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default ContestDashboardContainer;
