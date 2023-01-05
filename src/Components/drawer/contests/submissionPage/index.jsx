import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
import ProblemStatusTable from '../status/ProblemStatusTable';
import Viewer from '../../../common/MarkdownEditor/Viewer';
import { GET_SUBMISSION_PAGE_DETAILS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import Spinner from '../../../common/Spinner/index';
import { languageCodeAppender } from '../../../../commonFunctions';
import WrongAnswerContent from './WrongAnwerContent';

const SubmitContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { submissionId, contestId } = useParams();
  const { loading, error, data } = useQuery(GET_SUBMISSION_PAGE_DETAILS, {
    variables: { id: submissionId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissionById.success) {
    const { submission, showOutput, outputLink, expectedOutputLink } = data.submissionById;
    const { fileContent, output, problemId, status, duringContest, language } = submission;
    const { inputFile, outputFile } = problemId;
    const submissionArray = [submission];
    return (
      <div>
        <ProblemStatusTable submissions={submissionArray} contestId={contestId} onSubmissionPage />
        <Headline6 className="mt2 mb1 purple">CODE:</Headline6>
        <div className="mb3">
          <Viewer value={languageCodeAppender(fileContent, language)} />
        </div>
        {status === 'Wrong Answer' && !duringContest ? (
          <WrongAnswerContent
            inputFile={inputFile}
            output={output}
            outputFile={outputFile}
            showOutput={showOutput}
            outputFileLink={outputLink}
            expectedOutputLink={expectedOutputLink}
          />
        ) : null}
        {status === 'Compilation Error' || status === 'Runtime Error' ? (
          <div>
            <Headline6 className="mt2 mb1 purple">OUTPUT:</Headline6>
            <Viewer value={languageCodeAppender(output, language)} />
          </div>
        ) : null}
      </div>
    );
  }
  if (isSessionExpired(data.submissionById)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default SubmitContainer;
