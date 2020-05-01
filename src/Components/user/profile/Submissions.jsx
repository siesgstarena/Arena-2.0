import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSubmissionColor } from '../../../commonFunctions';
import Table from '../../common/Table';

// SubmissionTab Content
const Submissions = ({ submissions, submissionPages }) => {
  const tableHeading = ['#', 'Problem', 'Result', 'Lang'];
  console.log(submissionPages);
  const SubmissionContent = submissions.map(sub => (
    <tr key={sub._id} style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        <Link
          className="no-underline dim pointer mid-gray"
          to={`/contest/${sub.contest}/submission/${sub._id}`}
        >
          {(sub._id).slice(-6)}
        </Link>
      </td>
      <td className="tc pa3">
        <Link
          className="no-underline dim pointer mid-gray"
          to={`/contest/${sub.contest}/problem/${sub.problemId.code}`}
        >
          {sub.problemId.name}
        </Link>
      </td>
      <td className="tc pa3">
        <span
          className="b"
          style={{ color: getSubmissionColor(sub.status) }}
        >
          {sub.status}
        </span>
      </td>
      <td className="tc pa3">
        <span>
          {sub.language}
        </span>
      </td>
    </tr>
  ));
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

Submissions.propTypes = {
  submissionPages: PropTypes.number.isRequired,
  submissions: PropTypes.array.isRequired,
};

export default Submissions;
