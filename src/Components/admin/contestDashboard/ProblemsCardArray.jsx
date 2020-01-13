import React from 'react';
import { Headline6 } from '@material/react-typography';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
import ProblemCard from './ProblemCard';
import problems from './problems';

const ProblemsCardArray = ({ history, location, setSnackbarMessage }) => {
  const problemsArray = problems.map(problem => (
    <ProblemCard
      location={location}
      setSnackbarMessage={setSnackbarMessage}
      history={history}
      key={problem.id}
      name={problem.name}
      id={problem.id}
      points={problem.points}
    />
  ));

  const onCreateProblemClick = () => {
    history.push(`${history.location.pathname}/create`);
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
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ProblemsCardArray;
