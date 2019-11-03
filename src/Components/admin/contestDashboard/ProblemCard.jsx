import React, { useState } from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@material/react-dialog';
import { Snackbar } from '@material/react-snackbar';
import '@material/react-dialog/dist/dialog.css';

const ProblemCard = ({
  name, id, points, history, location,
}) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the problem - "${name}"`;
  const onAlertAccept = () => {
    setSnackbarMessage('The problem is successfully deleted');
  };
  const onProblemNameClick = () => {
    history.push(`${location.pathname}/${id}`);
  };
  const onTestClick = () => {
    history.push(`${location.pathname}/${id}/test`);
  };
  const onEditClick = () => {
    history.push(`${location.pathname}/${id}/edit`);
  };
  const onDeleteClick = () => {
    setIsAlertOpen(true);
  };
  const onResetStatusClick = () => {
    history.push(`${location.pathname}/reset/${id}`);
  };

  return (
    <div className="ba br4 b--black-20 pa3 mt2">
      <Headline6 className="mt0 mid-gray mb2 pointer dim" onClick={onProblemNameClick}>{name}</Headline6>
      <Body1 className="mid-gray">
        {id}
        &nbsp;
        -
        &nbsp;
        {points}
      </Body1>
      <Button style={{ color: '#555555' }} onClick={onTestClick}>
        Test Problem
      </Button>
      <Button style={{ color: '#555555' }} onClick={onEditClick}>
        Edit Problem
      </Button>
      <Button style={{ color: '#555555' }} onClick={onDeleteClick}>
        Delete Problem
      </Button>
      <br />
      <Button style={{ color: '#555555' }} onClick={onResetStatusClick}>
        Reset Submission Status
      </Button>
      <Dialog
        onClose={() => {
          setIsAlertOpen(false);
        }}
        open={isAlertOpen}
      >
        <DialogTitle>{alertTitle}</DialogTitle>
        <DialogContent>
          <p>{alertContent}</p>
        </DialogContent>
        <DialogFooter>
          <DialogButton action="dismiss">Cancel</DialogButton>
          <DialogButton action="discard" onClick={onAlertAccept} isDefault>Accept</DialogButton>
        </DialogFooter>
      </Dialog>
      {
        snackbarMessage
          ? <Snackbar message={snackbarMessage} timeoutMs={4000} leading actionText="dismiss" onClose={() => setSnackbarMessage('')} />
          : null
      }
    </div>
  );
};

ProblemCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default ProblemCard;
