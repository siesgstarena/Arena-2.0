import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';
import Spinner from '../../common/Spinner/index';
import { GET_SUBMISSION_BY_USER_ID } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import Submissions from './Submissions';

const SubmissionsContainer = () => {
  const limit = 10;
  const { userId } = useParams();
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_SUBMISSION_BY_USER_ID, {
    variables: { limit, skip: ((activePageNumber - 1) * limit), id: userId },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissionsByUserId) {
    const { pages } = data.submissionsByUserId;
    const { submissions } = data.submissionsByUserId;
    return (
      submissions.length !== 0
        ? (
          <div>
            <Submissions submissionPages={pages} submissions={submissions} />
            <div className="pt3">
              <PageCountDisplayer
                pageCount={data.submissionsByUserId.pages}
                activePageNumber={activePageNumber}
              />
            </div>
          </div>
        )
        : null
    );
  }
  if (isSessionExpired(data.submissionsByUserId)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default SubmissionsContainer;
