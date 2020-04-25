import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
import ProblemStatusTable from '../status/ProblemStatusTable';
import Viewer from '../../../common/MarkdownEditor/Viewer';
import { GET_SUBMISSION_PAGE_DETAILS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import Spinner from '../../../common/Spinner/index';

const SubmitContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { submissionId, contestId } = useParams();
  const [file, setFile] = useState('');
  const {
    loading, error, data,
  } = useQuery(GET_SUBMISSION_PAGE_DETAILS, {
    variables: { id: submissionId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissionById) {
    let { submission } = data.submissionById;
    const { fileContent } = submission;
    submission = [submission];
    fetch(fileContent)
      .then((response) => { setFile(response); });
    // console.log(data.submissionById.problems, problems);
    return (
      <div>
        <ProblemStatusTable submissions={submission} contestId={contestId} />
        <Headline6 className="mt2 mb1 purple">CODE:</Headline6>
        <Viewer value={file} />
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
