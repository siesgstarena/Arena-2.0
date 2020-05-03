import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_PROBLEMS_BY_CONTEST_CODE } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import SubmitSolution from './SubmitSolution';
import Spinner from '../../../common/Spinner/index';

const SubmitContainer = () => {
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
        <SubmitSolution problems={problems} />
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

export default SubmitContainer;
