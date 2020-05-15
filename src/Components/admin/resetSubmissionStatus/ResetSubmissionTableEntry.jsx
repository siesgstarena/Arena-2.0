import React, { useState } from 'react';
import Select, { Option } from '@material/react-select';
import Button from '@material/react-button';
import { Link, useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Switch from '@material/react-switch';
import '../../user/settings/settings.scss';
import { RESET_SUBMISSION, CHANGE_PLAGIARISM_STATUS } from '../../../graphql/mutations';
import { convertDate, convertTime, getSubmissionColor } from '../../../commonFunctions';

const ResetSubmissionTableEntry = ({ data, setSnackbarMessage }) => {
  const { contestId } = useParams();
  const createdAtDate = convertDate(data.createdAt);
  const createdAtTime = convertTime(data.createdAt);
  const [problemStatus, setProblemStatus] = useState(data.status);
  const [status, setStatus] = useState(data.status);
  const client = useApolloClient();
  const [plagiarismStatus, setPlagiarismStatus] = useState(data.plagiarism);
  const [statusColor, setStatuscolor] = useState(getSubmissionColor(data.status));

  const onUpdateClick = async () => {
    setSnackbarMessage('Updating status, Please wait.');
    const { data: updationResponse, error } = await client.mutate({
      mutation: RESET_SUBMISSION,
      variables: {
        id: data._id, status: problemStatus,
      },
      // refetchQueries: ['submissionsByContestCode'],
    });
    if (error) {
      setSnackbarMessage('An error has been encountered');
      return;
    }
    // console.log(updationResponse);
    if (updationResponse.resetSubmission.success) {
      setSnackbarMessage('Successfully updated the submission status.');
      setStatus(problemStatus);
      setStatuscolor(getSubmissionColor(problemStatus));
    } else {
      setSnackbarMessage(updationResponse.resetSubmission.message);
    }
  };

  const handlePlagiarismStatusChange = async () => {
    setSnackbarMessage('Updating status, Please wait.');
    const { data: updationResponse, error } = await client.mutate({
      mutation: CHANGE_PLAGIARISM_STATUS,
      variables: {
        id: data._id,
      },
    });
    if (error) {
      setSnackbarMessage('An error has been encountered');
      return;
    }
    // console.log(updationResponse);
    if (updationResponse.changePlagiarismStatus.success) {
      setSnackbarMessage('Successfully updated the plagiarism status.');
      // setStatus(problemStatus);
      setPlagiarismStatus(!plagiarismStatus);
      // setStatuscolor(getSubmissionColor(problemStatus));
    } else {
      setSnackbarMessage(updationResponse.changePlagiarismStatus.message);
    }
  };

  return (
    <tr className="tc">
      <td className="pa2 tc">
        <Link className="no-underline blue" to={`/contests/${contestId}/submission/${data._id}`}>
          {data._id.slice(-6)}
        </Link>
      </td>
      <td className="tc">
        {createdAtDate}
        <br />
        {createdAtTime}
      </td>
      <td className="pa2 tc">
        <Link className="no-underline blue" to={`/profile/${data.userId._id}`}>
          {data.userId.username}
        </Link>
      </td>
      <td
        style={{ color: `${statusColor}` }}
        className="pa2 tc"
      >
        {
          data.plagiarism
            ? (
              <>
                <s>{status}</s>
                <div className="red">
                  (Plagiarised)
                </div>
              </>
            )
            : status
        }
      </td>
      <td className="pa2 tc">{data.language}</td>
      <td className="pa2 tc">
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
      <td className="tc">
        <Switch
          className="react-switch-alternate"
          nativeControlId="my-switch"
          checked={plagiarismStatus}
          onChange={handlePlagiarismStatusChange}
        />
      </td>
    </tr>
  );
};

ResetSubmissionTableEntry.propTypes = {
  data: PropTypes.object.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};


export default React.memo(ResetSubmissionTableEntry);
