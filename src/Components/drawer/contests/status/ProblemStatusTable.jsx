import React from 'react';
import { Link } from 'react-router-dom';
import problemStatus from './problemStatus';

const ProblemStatusTable = () => {
  const problemStatusArray = problemStatus.map((status) => {
    // This portion checks which color is to be assigned to the verdict
    let color = '';
    if (status.verdict === 'Accepted') {
      color = 'green';
    } else if (status.verdict === 'Compilation Error') {
      color = '#999900';
    } else {
      color = 'red';
    }

    return (
      <tr key={status.id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">
          <Link className="no-underline dim blue pointer" to={`submission/${status.id}`}>
            {status.id}
          </Link>
        </td>
        <td className="tc pa3">
          {status.when}
        </td>
        <td className="tc pa3">
          <Link className="no-underline dim blue pointer" to={`/profile/${status.who.id}`}>
            {status.who.username}
          </Link>
        </td>
        <td className="tc pa3">
          <Link className="no-underline dim blue pointer" to={`problem/${status.problem.id}`}>
            {status.problem.name}
          </Link>
        </td>
        <td className="tc pa3" style={{ color }}>
          {status.verdict}
        </td>
        <td className="tc pa3">
          {status.language}
        </td>
        <td className="tc pa3">
          {status.time}
        </td>
        <td className="tc pa3">
          {status.memory}
        </td>
      </tr>
    );
  });

  return (
    <div className="" style={{ overflowX: 'auto' }}>
      <table>
        <tbody className="">
          <tr>
            <th className="tc">#</th>
            <th className="tc">When</th>
            <th className="tc">Who</th>
            <th className="tc">Problem</th>
            <th className="tc">Verdict</th>
            <th className="tc">Language</th>
            <th className="tc">Time</th>
            <th className="tc">Memory</th>
          </tr>
          {problemStatusArray}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemStatusTable;
