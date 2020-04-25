import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../../../common/Table/index';
import {
  getSubmissionColor, convertDate, convertTime, adding330Minutes, userColor,
} from '../../../../commonFunctions';
import AuthContext from '../../../../Contexts/AuthContext';

const ProblemsubmissionTable = ({ submissions, contestId }) => {
  const tableHeadings = ['#', 'When', 'Who', 'Problem', 'Verdict', 'Language', 'Time', 'Memory'];
  const { authState } = useContext(AuthContext);
  const problemsubmissionArray = submissions.map((submission) => {
    const color = getSubmissionColor(submission.status);
    const addedCreatedAt = adding330Minutes(submission.createdAt);
    const createdAtDate = convertDate(addedCreatedAt);
    const createdAtTime = convertTime(addedCreatedAt);
    return (
      <tr key={submission._id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">
          {
            !submission.duringContest
            || (authState.user && authState.user.userId === submission.userId._id)
              ? (
                <Link className="no-underline dim blue pointer" to={`/contests/${contestId}/submission/${submission._id}`}>
                  {submission._id.slice(-6)}
                </Link>
              )
              : submission._id.slice(-6)
          }
        </td>
        <td className="tc pa3">
          {createdAtDate}
          ,
          &nbsp;
          {createdAtTime}
        </td>
        <td className="tc pa3">
          <Link className="no-underline dim pointer" style={{ color: userColor(submission.userId.ratings, submission.userId._id) }} to={`/profile/${submission.userId._id}`}>
            {submission.userId.username}
          </Link>
        </td>
        <td className="tc pa3">
          <Link className="no-underline dim blue pointer" to={`/contests/${contestId}/problem/${submission.problemId.code}`}>
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
  contestId: PropTypes.string.isRequired,
};


export default ProblemsubmissionTable;
