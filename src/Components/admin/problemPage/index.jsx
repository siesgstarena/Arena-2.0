import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Button from '@material/react-button';
import ProblemPage from './ProblemPage';

const AdminProblemPage = () => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  const { contestId } = params;

  return (
    <div className="mw7 center pa2">
      <Button outlined className="mt3 mb3" onClick={() => history.push(`/admin/${contestId}`)}>
        Go back
      </Button>
      <Button outlined className="fr mt3 mb3" onClick={() => history.push(`${location.pathname}/test`)}>
        Submit Test Solution
      </Button>
      <ProblemPage />
    </div>
  );
};

export default AdminProblemPage;
