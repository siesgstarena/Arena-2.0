import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import ProblemPage from './ProblemPage';

const AdminProblemPage = (props) => {
  const { history, match, location } = props;
  const { params } = match;
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

AdminProblemPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default AdminProblemPage;
