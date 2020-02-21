import React, { useState } from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import AlertBox from '../../common/AlertBox/index';
import '@material/react-dialog/dist/dialog.css';

const ProblemCard = ({
  name, id, points, setSnackbarMessage,
}) => {
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the problem - "${name}"`;
  const history = useHistory();
  const location = useLocation();
  // onAlertAccept runs when the user clicks on the accept button on the alert box
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
      <AlertBox
        isOpen={isAlertOpen}
        setIsOpen={setIsAlertOpen}
        title={alertTitle}
        content={alertContent}
        onAccept={onAlertAccept}
      />
    </div>
  );
};

ProblemCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ProblemCard;
