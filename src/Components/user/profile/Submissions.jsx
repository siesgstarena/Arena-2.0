import React from 'react';
import { Link } from 'react-router-dom';
import { getSubmissionColor } from '../../../commonFunctions';
import Table from '../../common/Table';


// Array/Objects to fetch from
const tableHeading = ['#', 'Problem', 'Result', 'Lang'];

const pastSubmissions = [
  {
    id: '5e89ec23e4cda30022544d85',
    problem: 'Tug of War',
    problemCode: 'UNI04',
    contest: 'UNIVERSE',
    result: 'Wrong Answer',
    lang: 'Python3',
  },
  {
    id: '5e80c4cb99770c00221d40cc',
    problem: 'Go Corona, Corona Go',
    problemCode: 'SRM16A',
    contest: 'SRM16',
    result: 'Runtime Error',
    lang: 'C++',
  },
  {
    id: '5e80c40c99770c00221d408d',
    problem: 'A Mission in the Land of Greens',
    contest: 'SRM14',
    problemCode: 'SRM14B',
    result: 'Accepted',
    lang: 'Javascript',
  },
  {
    id: '5e80c40c99770c00221d418d',
    problem: 'A Mission in the Land of Greens',
    contest: 'SRM14',
    problemCode: 'SRM14B',
    result: 'Accepted',
    lang: 'Javascript',
  }
];

// SubmissionTab Content
const Submissions = () => {
  const SubmissionContent = pastSubmissions.map(sub => (
    <tr key={sub.id} style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        <Link
          className="no-underline dim pointer mid-gray"
          to={`/contest/${sub.contest}/submission/${sub.id}`}
        >
          {(sub.id).slice(-6)}
        </Link>
      </td>
      <td className="tc pa3">
        <Link
          className="no-underline dim pointer mid-gray"
          to={`/contest/${sub.contest}/problem/${sub.problemCode}`}
        >
          {sub.problem}
        </Link>
      </td>
      <td className="tc pa3">
        <span
          className="b"
          style={{ color: getSubmissionColor(sub.result) }}
        >
          {sub.result}
        </span>
      </td>
      <td className="tc pa3">
        <span>
          {sub.lang}
        </span>
      </td>
    </tr>
  ),
  );
  return (
    <div className="mt3">
      <Table
        tableHeadings={tableHeading}
        tableData={SubmissionContent}
        tableHeadingClassName="tc mt2"
      />
    </div>
  );
};

export default Submissions;