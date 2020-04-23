import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../../../common/Table/index';
import {
  getSubmissionColor, convertDate, convertTime, adding330Minutes,
} from '../../../../commonFunctions';

const ProblemsubmissionTable = ({ submissions }) => {
  const tableHeadings = ['#', 'When', 'Who', 'Problem', 'Verdict', 'Language', 'Time', 'Memory'];
  const problemsubmissionArray = submissions.map((submission) => {
    const color = getSubmissionColor(submission.status);
    const addedCreatedAt = adding330Minutes(submission.createdAt);
    const createdAtDate = convertDate(addedCreatedAt);
    const createdAtTime = convertTime(addedCreatedAt);
    return (
      <tr key={submission._id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">
          <Link className="no-underline dim blue pointer" to={`submission/${submission._id}`}>
            {submission._id.slice(-6)}
          </Link>
        </td>
        <td className="tc pa3">
          {createdAtDate}
          ,
          &nbsp;
          {createdAtTime}
        </td>
        <td className="tc pa3">
          <Link className="no-underline dim blue pointer" to={`/profile/${submission.userId._id}`}>
            {submission.userId.username}
          </Link>
        </td>
        <td className="tc pa3">
          <Link className="no-underline dim blue pointer" to={`problem/${submission.problemId.code}`}>
            {submission.problemId.name}
          </Link>
        </td>
        <td className="tc pa3" style={{ color }}>
          {submission.status}
        </td>
        <td className="tc pa3">
          {submission.language}
        </td>
        <td className="tc pa3">
          {submission.time}
        </td>
        <td className="tc pa3">
          {submission.memory}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Table tableHeadings={tableHeadings} tableData={problemsubmissionArray} tableHeadingClassName="tc" />
    </div>
  );
};

ProblemsubmissionTable.propTypes = {
  submissions: PropTypes.array.isRequired,
};


export default ProblemsubmissionTable;
