import React, { useState } from 'react';
import Select, { Option } from '@material/react-select';
import Button from '@material/react-button';
import { Link, useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { RESET_SUBMISSION } from '../../../graphql/mutations';
import { convertDate, convertTime } from '../../../commonFunctions';

const ResetSubmissionTableEntry = ({ data, setSnackbarMessage }) => {
  const { contestId } = useParams();
  const createdAtDate = convertDate(data.createdAt);
  const createdAtTime = convertTime(data.createdAt);
  const [problemStatus, setProblemStatus] = useState(data.status);
  const [status, setStatus] = useState(data.status);
  const client = useApolloClient();


  const updateStatusColor = (submissionStatus) => {
    if (submissionStatus === 'Time Limit Exceeded' || submissionStatus === 'Compilation Error') {
      return '#ffc107';
    }
    if (submissionStatus === 'Wrong Answer' || submissionStatus === 'Runtime Error') {
      return '#dc3545';
    }
    if (submissionStatus === 'Accepted') {
      return '#28a745';
    }
    return '#dc3545';
  };
  const [statusColor, setStatuscolor] = useState(updateStatusColor(data.status));

  const onUpdateClick = async () => {
    setSnackbarMessage('Updating status, Please wait.');
    const { data: updationResponse, error } = await client.mutate({
      mutation: RESET_SUBMISSION,
      variables: {
        id: data._id, status: problemStatus,
      },
    });
    if (error) {
      setSnackbarMessage('An error has been encountered');
      return;
    }
    // console.log(updationResponse);
    if (updationResponse.resetSubmission.success) {
      setSnackbarMessage('Successfully updated the submission status.');
      setStatus(problemStatus);
      setStatuscolor(updateStatusColor(problemStatus));
    } else {
      setSnackbarMessage(updationResponse.resetSubmission.message);
    }
  };

  return (
    <tr className="tc">
      <td className="pa3 tc">
        <Link className="no-underline blue" to={`/contest/${contestId}/submission/${data._id}`}>
          {data._id.slice(-6)}
        </Link>
      </td>
      <td className="tc">
        {createdAtDate}
        <br />
        {createdAtTime}
      </td>
      <td className="pa3 tc">
        <Link className="no-underline blue" to={`/profile/${data.userId._id}`}>
          {data.userId.username}
        </Link>
      </td>
      <td
        style={{ color: `${statusColor}` }}
        className="pa3 tc"
      >
        {status}
      </td>
      <td className="pa3 tc">{data.language}</td>
      <td className="pa3 tc">
        <Select
          className=""
          label="Status"
          value={problemStatus}
          onChange={evt => setProblemStatus(evt.target.value)}
        >
          <Option value="Accepted">Accepted</Option>
          <Option value="Wrong Answer">Wrong Answer</Option>
          <Option value="Time Limit Exceeded">Time Limit Exceeded</Option>
          <Option value="Compilation Error">Compilation Error</Option>
          <Option value="Runtime Error">Runtime Error</Option>
        </Select>
        <Button className="mt2-m ml2-l mt2 mt0-l" outlined onClick={() => onUpdateClick(data, problemStatus, setStatus, setStatuscolor)}>
          Update
        </Button>
      </td>
    </tr>
  );
};

ResetSubmissionTableEntry.propTypes = {
  data: PropTypes.object.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};


export default ResetSubmissionTableEntry;
