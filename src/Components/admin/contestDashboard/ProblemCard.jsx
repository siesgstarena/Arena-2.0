import React, { useState, useContext } from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import AlertBox from '../../common/AlertBox/index';
import '@material/react-dialog/dist/dialog.css';
import SnackbarContext from '../../../Contexts/SnackbarContext';

const ProblemCard = ({
  name, id, points,
}) => {
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the problem - "${name}"`;
  const { setSnackbarMessage } = useContext(SnackbarContext);
  const history = useHistory();
  const { contestId } = useParams();
  // onAlertAccept runs when the user clicks on the accept button on the alert box
  const onAlertAccept = () => {
    setSnackbarMessage('The problem is successfully deleted');
  };
  const onProblemNameClick = () => {
    history.push(`/admin/${contestId}/${id}`);
  };
  const onTestClick = () => {
    history.push(`/admin/${contestId}/${id}/test`);
  };
  const onEditClick = () => {
    history.push(`/admin/${contestId}/${id}/edit`);
  };
  const onDeleteClick = () => {
    setIsAlertOpen(true);
  };
  const onResetStatusClick = () => {
    history.push(`/admin/${contestId}/reset/${id}`);
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
};

export default ProblemCard;
