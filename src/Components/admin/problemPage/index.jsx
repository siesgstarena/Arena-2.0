import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Button from '@material/react-button';
import ProblemPage from './ProblemPage';
import { GET_PROBLEM_DETAILS } from '../../../graphql/queries';
import Spinner from '../../common/Spinner/index';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const AdminProblemPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { problemId, contestId } = useParams();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_PROBLEM_DETAILS, {
    variables: { code: problemId },
  });
  // console.log(GET_PROBLEM_DETAILS);
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data && data.problemByCode && data.problemByCode._id) {
    return (
      <div className="mw7 center pa2">
        <Button outlined className="mt3 mb3" onClick={() => history.push(`/admin/${contestId}`)}>
          Go back
        </Button>
        <Button outlined className="fr mt3 mb3" onClick={() => history.push(`${location.pathname}/test`)}>
          Submit Test Solution
        </Button>
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

export default AdminProblemPage;
