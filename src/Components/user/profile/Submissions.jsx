import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSubmissionColor } from '../../../commonFunctions';
import Table from '../../common/Table';

// SubmissionTab Content
const Submissions = ({ submissions }) => {
  const tableHeading = ['#', 'Problem', 'Result', 'Lang'];
  const SubmissionContent = submissions.map((submission) => (
    <tr key={submission._id} style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        <Link
          className="no-underline dim pointer blue"
          to={`/contests/${submission.problemId.contestCode}/submission/${submission._id}`}
        >
          {submission._id.slice(-6)}
        </Link>
      </td>
      <td className="tc pa3">
        <Link
          className="no-underline dim pointer blue"
          to={`/contests/${submission.problemId.contestCode}/problem/${submission.problemId.code}`}
        >
          {submission.problemId.name}
        </Link>
      </td>
      <td className="tc pa3">
        <span className="b" style={{ color: getSubmissionColor(submission.status) }}>
          {submission.status}
        </span>
      </td>
      <td className="tc pa3">
        <span>{submission.language}</span>
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
  submissions: PropTypes.array.isRequired,
};

export default Submissions;
