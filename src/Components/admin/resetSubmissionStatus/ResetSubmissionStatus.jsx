import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Headline4, Body1 } from '@material/react-typography';
import ResetSubmissionTable from './ResetSubmissionTable';
import Spinner from '../../common/Spinner/index';
import { GET_SUBMISSION_BY_CONTEST_CODE } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import useSentry from '../../../customHooks/useSentry';

const ResetSubmissionStatus = () => {
  const { contestId, problemId } = useParams();
  const { logError } = useSentry();
  const limit = 15;
  const activePageNumber = useActivePageState();
  const { loading, error, data } = useQuery(GET_SUBMISSION_BY_CONTEST_CODE, {
    variables: {
      contestCode: contestId,
      problemCode: problemId,
      limit,
      skip: (activePageNumber - 1) * limit,
    },
  });
  if (loading) return <Spinner />;
  if (error) {
    logError('submission by contest code query', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.submissionsByContestCode) {
    const response = data.submissionsByContestCode.submissions;
    return (
      <div className="pl5-l pr5-l pl2 pr2">
        <Headline4 className="purple mb0">Update Submission Status</Headline4>
        <Body1 className="mt2">
          Problem: &nbsp;
          {problemId}
          &nbsp; - &nbsp;
          {response[0].problemId.name}
        </Body1>
        <ResetSubmissionTable resetSubmissionTableData={response} />
        <div className="mt3">
          <PageCountDisplayer
            pageCount={data.submissionsByContestCode.pages}
            activePageNumber={activePageNumber}
          />
        </div>
      </div>
    );
  }

  // random cases not handled by graphql
  logError('submission by contest code query', { ...data, ...error });
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default ResetSubmissionStatus;
