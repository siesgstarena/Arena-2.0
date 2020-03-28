import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Headline4, Body1 } from '@material/react-typography';
import ResetSubmissionTable from './ResetSubmissionTable';
import Spinner from '../../common/Spinner/index';
import { GET_RESET_SUBMISSION_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const ResetSubmissionStatus = () => {
  const { contestId, problemId } = useParams();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_RESET_SUBMISSION_DETAILS, {
    variables: { contestCode: contestId, problemCode: problemId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissionsByContestCode) {
    const response = data.submissionsByContestCode;
    console.log(response);
    return (
      <div className="pl5-ns pr5-ns pl2 pr2">
        <Headline4 className="purple mb0">Update Submission Status</Headline4>
        <Body1 className="mt2">
          Problem:
          &nbsp;
          {problemId}
          &nbsp;
          -
          &nbsp;
          {response[0].problemId.name}
        </Body1>
        <ResetSubmissionTable resetSubmissionTableData={response} />
      </div>
    );
  }
  if (isSessionExpired(data.submissionsByContestCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default ResetSubmissionStatus;
