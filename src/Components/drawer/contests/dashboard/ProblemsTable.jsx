import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import problems from './problems';

const ProblemsTable = ({ pathname }) => {
  const problemsArray = problems.map(problem => (
    <tr key={problem.id}>
      <td>
        {problem.id}
      </td>
      <td>
        {problem.points}
      </td>
      <td>
        <Link className="no-underline black" to={`${pathname}/problem/${problem.id}`}>
          {problem.name}
        </Link>
      </td>
    </tr>
  ));
  return (
    <div className="" style={{ overflowX: 'auto' }}>
      <table className="">
        <tbody className="">
          <tr className="">
            <th>#</th>
            <th>Points</th>
            <th>Problem Name</th>
          </tr>
          {problemsArray}
        </tbody>
      </table>
    </div>
  );
};

ProblemsTable.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default ProblemsTable;
