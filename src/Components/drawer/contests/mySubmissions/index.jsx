import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import Spinner from '../../../common/Spinner/index';
import { GET_CONTEST_STATUS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import ContestTabBar from '../common/ContestTabBar';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../../common/PageCountDisplayer';
import ProblemStatusTable from '../status/ProblemStatusTable';
import useActivePageState from '../../../../customHooks/useAcitvePageState';
import AuthContext from '../../../../Contexts/AuthContext';

const MySubmissionsContainer = () => {
  const limit = 15;
  const { contestId } = useParams();
  const activePageNumber = useActivePageState();
  const { authState } = useContext(AuthContext);
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_CONTEST_STATUS, {
    variables: {
      limit,
      skip: ((activePageNumber - 1) * limit),
      contestCode: contestId,
      userId: authState.user.userId,
    },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.submissionsByContestCode) {
    const { submissions } = data.submissionsByContestCode;
    return (
      <div className="">
        <div style={{ marginBottom: '10px' }}>
          <ContestTabBar />
        </div>
        <ProblemStatusTable
          contestId={contestId}
          submissions={submissions}
        />
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.submissionsByContestCode.pages}
            activePageNumber={activePageNumber}
          />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.submissionsByContestCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default MySubmissionsContainer;
