import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '../../common/Table/index';
import CustomSnackbar from '../../common/Snackbar';
import ResetSubmissionTableEntry from './ResetSubmissionTableEntry';

const ResetSubmissionStatus = ({ resetSubmissionTableData }) => {
  const tableHeadings = ['#', 'When', 'Who', 'Status', 'Language', 'Action', 'Plagiarism'];
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const tableData = resetSubmissionTableData.map(data => (
    <ResetSubmissionTableEntry
      key={data.createdAt}
      data={data}
      setSnackbarMessage={setSnackbarMessage}
    />
  ));
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
