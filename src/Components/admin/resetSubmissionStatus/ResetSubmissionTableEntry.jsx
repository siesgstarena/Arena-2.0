import React, { useState } from 'react';
import Select from '@material/react-select';
import Button from '@material/react-button';
import { format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Switch from '@material/react-switch';
import '../../user/settings/settings.scss';
import { RESET_SUBMISSION, CHANGE_PLAGIARISM_STATUS } from '../../../graphql/mutations';
import { getSubmissionColor } from '../../../commonFunctions';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import useSentry from '../../../customHooks/useSentry';

const ResetSubmissionTableEntry = ({ data, setSnackbarMessage }) => {
  const { contestId } = useParams();
  // const createdAtDate = convertDate(data.createdAt);
  // const createdAtTime = convertTime(data.createdAt);
  const [problemStatus, setProblemStatus] = useState(data.status);
  const client = useApolloClient();
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const { logError } = useSentry();

  const statusOptions = [
    { value: 'Accepted', label: 'Accepted' },
    { value: 'Wrong Answer', label: 'Wrong Answer' },
    { value: 'Runtime Error', label: 'Runtime Error' },
    { value: 'Compilation Error', label: 'Compilation Error' },
    { value: 'Time Limit Exceeded', label: 'Time Limit Exceeded' },
  ];

  const onUpdateClick = async () => {
    setSnackbarMessage('Updating status, Please wait');
    const { data: updationResponse, error } = await client.mutate({
      mutation: RESET_SUBMISSION,
      variables: {
        id: data._id,
        status: problemStatus,
      },
    });
    if (error) {
      logError('updateAnnoucement query', { ...data, ...error });
      setSnackbarMessage('An error has been encountered');
      return;
    }
    if (isSessionExpired(updationResponse.resetSubmission)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (updationResponse.resetSubmission.success) {
      setSnackbarMessage('Successfully updated the submission status');
    } else {
      setSnackbarMessage(updationResponse.resetSubmission.message);
    }
  };

  const handlePlagiarismStatusChange = async () => {
    setSnackbarMessage('Updating plagiarism status, Please wait');
    const { data: updationResponse, error } = await client.mutate({
      mutation: CHANGE_PLAGIARISM_STATUS,
      variables: {
        id: data._id,
      },
    });
    if (error) {
      logError('updateAnnoucement query', { ...data, ...error });
      setSnackbarMessage('An error has been encountered');
      return;
    }
    if (isSessionExpired(updationResponse.changePlagiarismStatus)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (updationResponse.changePlagiarismStatus.success) {
      setSnackbarMessage('Successfully updated the plagiarism status');
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
        {format(new Date(Number(data.createdAt)), 'MMM dd, yyyy')}
        <br />
        {format(new Date(Number(data.createdAt)), 'hh:mm:ss aa')}
      </td>
      <td className="pa2 tc">
        <Link className="no-underline blue" to={`/profile/${data.userId._id}`}>
          {data.userId.username}
        </Link>
      </td>
      <td style={{ color: `${getSubmissionColor(data.status)}` }} className="pa2 tc">
        {data.plagiarism ? (
          <>
            <s>{data.status}</s>
            <div className="red">(Plagiarised)</div>
          </>
        ) : (
          data.status
        )}
      </td>
      <td className="pa2 tc">{data.language}</td>
      <td className="tc">
        <Select
          label="status"
          value={problemStatus}
          onChange={(e) => setProblemStatus(e.target.value)}
          options={statusOptions}
        />
        <Button className="ma2" outlined onClick={onUpdateClick}>
          Update
        </Button>
      </td>
      <td className="tc">
        <Switch
          className="react-switch-alternate"
          nativeControlId="my-switch"
          checked={data.plagiarism}
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
