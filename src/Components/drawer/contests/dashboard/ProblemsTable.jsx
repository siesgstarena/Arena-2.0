import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import problems from './problems';
import Table from '../../../common/Table/index';

const ProblemsTable = ({ pathname }) => {
  const tableHeadings = ['#', 'Points', 'Problem Name'];
  const problemsArray = problems.map(problem => (
    <tr key={problem.id}>
      <td>
        {problem.id}
      </td>
      <td>
        {problem.points}
      </td>
      <td>
        <Link className="no-underline dim blue pointer" to={`${pathname}/problem/${problem.id}`}>
          {problem.name}
        </Link>
      </td>
    </tr>
  ));
  return (
    <Table tableHeadings={tableHeadings} tableData={problemsArray} />
  );
};

ProblemsTable.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default ProblemsTable;
