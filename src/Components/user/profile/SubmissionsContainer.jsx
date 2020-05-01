import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../common/Spinner/index';
import { GET_ALL_RATINGS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import Submissions from './Submissions';

const SubmissionsContainer = () => {
  const limit = 3;
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_ALL_RATINGS, {
    variables: { limit, skip: ((activePageNumber - 1) * limit) },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissions) {
    const { submissionPages } = data;
    const { submissions } = data;
    return (
      <div>
        <Submissions submissionPages={submissionPages} submissions={submissions} />
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.submissions.pages}
            activePageNumber={activePageNumber}
          />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.submissions)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default SubmissionsContainer;
