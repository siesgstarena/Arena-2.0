import React from 'react';
import { Headline6 } from '@material/react-typography';
import { useHistory } from 'react-router-dom';
import Button from '@material/react-button';
import ProblemCard from './ProblemCard';
import problems from './problems';

const ProblemsCardArray = () => {
  const history = useHistory();

  const problemsArray = problems.map(problem => (
    <ProblemCard
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

export default ProblemsCardArray;
