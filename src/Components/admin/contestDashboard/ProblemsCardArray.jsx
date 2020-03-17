import React from 'react';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '@material/react-button';
import ProblemCard from './ProblemCard';
// import problems from './problems';

const ProblemsCardArray = ({ problems }) => {
  const history = useHistory();

  const problemsArray = problems.map(problem => (
    <ProblemCard
      key={problem._id}
      name={problem.name}
      id={problem.code}
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
  problems: PropTypes.array.isRequired,
};

export default ProblemsCardArray;
