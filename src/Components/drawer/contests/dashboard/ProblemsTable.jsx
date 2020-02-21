import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import problems from './problems';
import Table from '../../../common/Table/index';

const ProblemsTable = () => {
  const tableHeadings = ['#', 'Points', 'Problem Name'];
  const match = useRouteMatch();
  const { url } = match;
  const problemsArray = problems.map(problem => (
    <tr key={problem.id}>
      <td>
        {problem.id}
      </td>
      <td>
        {problem.points}
      </td>
      <td>
        <Link className="no-underline dim blue pointer" to={`${url}/problem/${problem.id}`}>
          {problem.name}
        </Link>
      </td>
    </tr>
  ));
  return (
    <Table tableHeadings={tableHeadings} tableData={problemsArray} />
  );
};

export default ProblemsTable;
