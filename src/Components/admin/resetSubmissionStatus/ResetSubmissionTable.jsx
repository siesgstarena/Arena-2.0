import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Select, { Option } from '@material/react-select';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';
import Table from '../../common/Table/index';
import useConvertDateAndTime from '../../../customHooks/useConvertDateAndTime';
import CustomSnackbar from '../../common/Snackbar';
import { RESET_SUBMISSION } from '../../../graphql/mutations';

const ResetSubmissionStatus = ({ resetSubmissionTableData }) => {
  const { convertDate, convertTime } = useConvertDateAndTime();
  const tableHeadings = ['#', 'When', 'Who', 'Status', 'Language', 'Action'];
  const { contestId } = useParams();
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const client = useApolloClient();

  const updateStatusColor = (status) => {
    if (status === 'Time Limit Exceeded' || status === 'Compilation Error') {
      return '#ffc107';
    }
    if (status === 'Wrong Answer' || status === 'Runtime Error') {
      return '#dc3545';
    }
    if (status === 'Accepted') {
      return '#28a745';
    }
    return '#dc3545';
  };

  const onUpdateClick = async (data, problemStatus, setStatus, setStatuscolor) => {
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
    console.log(updationResponse);
    if (updationResponse.resetSubmission.success) {
      setSnackbarMessage('Successfully updated the submission status.');
      setStatus(problemStatus);
      setStatuscolor(updateStatusColor(problemStatus));
    } else {
      setSnackbarMessage(updationResponse.resetSubmission.message);
    }
  };

  const tableData = resetSubmissionTableData.map((data) => {
    const createdAtDate = convertDate(data.createdAt);
    const createdAtTime = convertTime(data.createdAt);
    const [problemStatus, setProblemStatus] = useState(data.status);
    const [status, setStatus] = useState(data.status);
    const [statusColor, setStatuscolor] = useState(updateStatusColor(data.status));


    return (
      <tr className="tc" key={data.createdAt}>
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
  });
  return (
    <div className="">
      <Table tableHeadings={tableHeadings} tableData={tableData} tableHeadingClassName="tc" />
      <CustomSnackbar
        setSnackbarMessage={setSnackbarMessage}
        snackbarMessage={snackbarMessage}
      />
    </div>
  );
};

ResetSubmissionStatus.propTypes = {
  resetSubmissionTableData: PropTypes.array.isRequired,
};

export default ResetSubmissionStatus;
