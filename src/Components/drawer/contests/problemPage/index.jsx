import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import ProblemPage from '../../../admin/problemPage/ProblemPage';
import { GET_PROBLEM_DETAILS } from '../../../../graphql/queries';
import Spinner from '../../../common/Spinner/index';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';

const ProblemPageContainer = () => {
  const { problemId } = useParams();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_PROBLEM_DETAILS, {
    variables: { code: problemId },
  });
  // console.log(GET_PROBLEM_DETAILS);
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data && data.problemByCode && data.problemByCode._id) {
    return (
      <div>
        <ProblemPage problemDetails={data.problemByCode} />
      </div>
    );
  }
  if (isSessionExpired(data.problemByCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message={data.problemByCode.message} />;
};

export default ProblemPageContainer;
