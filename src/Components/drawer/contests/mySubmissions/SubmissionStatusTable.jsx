import React from 'react';
import { Link } from 'react-router-dom';
import submissionStatus from './submissionStatus';
import Table from '../../../common/Table';

const SubmissionStatusTable = () => {
  const tableHeadings = ['#', 'When', 'Who', 'Problem', 'Verdict', 'Language', 'Time', 'Memory'];
  const submissionStatusArray = submissionStatus.map((status) => {
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
    <Table tableHeadings={tableHeadings} tableData={submissionStatusArray} tableHeadingClassName="tc" />
  );
};

export default SubmissionStatusTable;
