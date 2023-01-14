import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import Table from '../../../common/Table/index';
import { problemBackgroundColor } from '../../../../utils/commonFunctions';

const ProblemsTable = ({ problems }) => {
  const tableHeadings = ['#', 'Points', 'Problem Name'];
  const match = useRouteMatch();
  const { url } = match;
  const problemsArray = problems.map((problem, index) => (
    <tr
      key={problem.problemDetails.code}
      style={{ backgroundColor: problemBackgroundColor(problem.solved, problem.attempts) }}
    >
      <td>{index + 1}</td>
      <td>{problem.problemDetails.points}</td>
      <td>
        <Link
          className="no-underline dim blue pointer"
          to={`${url}/problem/${problem.problemDetails.code}`}
        >
          {problem.problemDetails.name}
        </Link>
      </td>
    </tr>
  ));
  return <Table tableHeadings={tableHeadings} tableData={problemsArray} />;
};

ProblemsTable.propTypes = {
  problems: PropTypes.array.isRequired,
};

export default ProblemsTable;
