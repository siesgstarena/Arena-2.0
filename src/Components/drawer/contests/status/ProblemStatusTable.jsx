import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Table from '../../../common/Table/index';
import { getSubmissionColor, userColor } from '../../../../utils/commonFunctions';
import AuthContext from '../../../../Contexts/AuthContext';

const ProblemsubmissionTable = ({
  submissions,
  contestId,
  submissionsVisible,
  onSubmissionPage = false,
}) => {
  const tableHeadings = ['#', 'When', 'Who', 'Problem', 'Verdict', 'Language', 'Time', 'Memory'];
  const { authState } = useContext(AuthContext);
  const problemsubmissionArray = submissions.map((submission) => {
    const color = getSubmissionColor(submission.status);
    // console.log(submissionsVisible);
    return (
      <tr key={submission._id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">
          {(submissionsVisible ||
            (authState.user && authState.user.userId === submission.userId._id)) &&
          !onSubmissionPage ? (
            <Link
              className="no-underline dim blue pointer"
              to={{
                pathname: `/contests/${contestId}/submission/${submission._id}`,
              }}
            >
              {submission._id.slice(-6)}
            </Link>
          ) : (
            submission._id.slice(-6)
          )}
        </td>
        <td className="tc pa3 nowrap">
          {format(new Date(Number(submission.createdAt)), 'MMM dd, yyyy')}
          <br />
          {format(new Date(Number(submission.createdAt)), 'hh:mm:ss aa')}
        </td>
        <td className="tc pa3">
          <Link
            className="no-underline dim pointer"
            style={{ color: userColor(submission.userId.ratings, submission.userId._id) }}
            to={`/profile/${submission.userId._id}`}
          >
            {submission.userId.username}
          </Link>
        </td>
        <td className="tc pa3">
          <Link
            className="no-underline dim blue pointer"
            to={`/contests/${contestId}/problem/${submission.problemId.code}`}
          >
            {submission.problemId.name}
          </Link>
        </td>
        <td className="tc pa3" style={{ color }}>
          {submission.plagiarism ? (
            <>
              <s>{submission.status}</s>
              <div className="red">(Plagiarised)</div>
            </>
          ) : (
            submission.status
          )}
        </td>
        <td className="tc pa3">{submission.language}</td>
        <td className="tc pa3">{submission.time}</td>
        <td className="tc pa3">{submission.memory}</td>
      </tr>
    );
  });

  return (
    <div>
      <Table
        tableHeadings={tableHeadings}
        tableData={problemsubmissionArray}
        tableHeadingClassName="tc"
      />
    </div>
  );
};

ProblemsubmissionTable.propTypes = {
  submissions: PropTypes.array.isRequired,
  contestId: PropTypes.string.isRequired,
  submissionsVisible: PropTypes.bool,
  onSubmissionPage: PropTypes.bool,
};

export default ProblemsubmissionTable;
