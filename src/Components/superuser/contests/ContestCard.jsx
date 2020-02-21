import React, { useState, useContext } from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material/react-button';
import AlertBox from '../../common/AlertBox/index';
import SnackbarContext from '../../../Contexts/SnackbarContext';
import '@material/react-dialog/dist/dialog.css';

const ProblemCard = ({
  name, id, startTime, duration,
}) => {
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the contest - "${name}"`;
  const { setSnackbarMessage } = useContext(SnackbarContext);
  const history = useHistory();
  const location = useLocation();
  // onAlertAccept runs when the user clicks on the accept button on the alert box
  const onAlertAccept = () => {
    setSnackbarMessage('The contest is successfully deleted');
  };
  const redirectToContest = () => {
    history.push(`/contests/${id}`);
  };
  const redirectToEditContest = () => {
    history.push(`${location.pathname}/${id}/edit`);
  };
  const onDeleteClick = () => {
    setIsAlertOpen(true);
  };

  return (
    <div className="ba br4 b--black-20 pa3 mt2">
      <Headline6 className="mt0 mid-gray mb2 pointer dim" onClick={redirectToContest}>{name}</Headline6>
      <Body1 className="mid-gray">
        {duration}
      </Body1>
      <Body1>
        <span>Start:</span>
        &nbsp;
        <span className="mid-gray">{startTime}</span>
        &nbsp;
        |
        &nbsp;
        <span>End:</span>
        &nbsp;
        <span className="mid-gray">{startTime}</span>
      </Body1>
      <Button style={{ color: '#555555' }} onClick={redirectToContest}>
        View Contest
      </Button>
      <Button style={{ color: '#555555' }} onClick={redirectToEditContest}>
        Edit Contest
      </Button>
      <Button style={{ color: '#555555' }} onClick={onDeleteClick}>
        Delete Contest
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
  id: PropTypes.number.isRequired,
  startTime: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default ProblemCard;
