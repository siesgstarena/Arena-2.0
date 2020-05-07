import React from 'react';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material/react-button';
import ProblemCard from './ProblemCard';
// import problems from './problems';

const ProblemsCardArray = ({ problems, setSnackbarMessage }) => {
  const history = useHistory();
  const { contestId } = useParams();

  const problemsArray = problems.map(problem => (
    <ProblemCard
      setSnackbarMessage={setSnackbarMessage}
      key={problem._id}
      name={problem.name}
      code={problem.code}
      id={problem._id}
      points={problem.points}
    />
  ));

  const onCreateProblemClick = () => {
    history.push(`/admin/${contestId}/create`);
  };

  return (
    <div>
      <Headline6 className="mid-gray mt4 mb0">
        Problems in the contest
      </Headline6>
      <Button onClick={onCreateProblemClick}>
        Create a new problem
      </Button>
      {problemsArray}
    </div>
  );
};

ProblemsCardArray.propTypes = {
  problems: PropTypes.array.isRequired,
  setSnackbarMessage: PropTypes.func,
};

export default React.memo(ProblemsCardArray);
