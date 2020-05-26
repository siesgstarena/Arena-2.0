import React, { useState } from 'react';
import Card from '@material/react-card';
import { useApolloClient } from '@apollo/react-hooks';
import { Headline6, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material/react-button';
import AlertBox from '../../common/AlertBox/index';
import '@material/react-dialog/dist/dialog.css';
import { DELETE_CONTEST } from '../../../graphql/mutations';

const ContestCard = ({ name, startTime, duration, endTime, code, setSnackbarMessage }) => {
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the contest - "${name}"`;
  const history = useHistory();
  const location = useLocation();

  const redirectToContest = () => {
    history.push(`/contests/${code}`);
  };
  const redirectToEditContest = () => {
    history.push(`${location.pathname}/${code}/edit`);
  };
  const onDeleteClick = () => {
    setIsAlertOpen(true);
  };
  const client = useApolloClient();
  const deleteContest = async () => {
    setSnackbarMessage('Deleting contest, Please wait');
    const { data, error } = await client.mutate({
      mutation: DELETE_CONTEST,
      variables: {
        code,
      },
    });
    if (error) {
      setSnackbarMessage('Database error encountered');
      return;
    }
    if (data.deleteContest.success) {
      setSnackbarMessage('Contest deleted successfully');
    } else {
      setSnackbarMessage(data.deleteContest.message);
    }
  };

  return (
    <Card className="pa3 mt2">
      <Headline6 className="mt0 blue mb2 pointer dim" onClick={redirectToContest}>
        {name}
        &nbsp; ({code})
      </Headline6>
      <Body1 className="mid-gray">
        <span className="black">Duration:</span>
        &nbsp;
        {duration[0]}
        &nbsp;
        {duration[1]}
      </Body1>
      <Body1>
        <span>Start:</span>
        &nbsp;
        <span className="mid-gray">{startTime}</span>
        &nbsp; | &nbsp;
        <span>End:</span>
        &nbsp;
        <span className="mid-gray">{endTime}</span>
      </Body1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button
          style={{ color: '#555555', padding: 0 }}
          className="mr3"
          onClick={redirectToEditContest}
        >
          Edit Contest
        </Button>
        <Button style={{ color: '#555555', padding: 0 }} onClick={onDeleteClick}>
          Delete Contest
        </Button>
      </div>
      <AlertBox
        isOpen={isAlertOpen}
        setIsOpen={setIsAlertOpen}
        title={alertTitle}
        content={alertContent}
        onAccept={deleteContest}
      />
    </Card>
  );
};

ContestCard.propTypes = {
  name: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  duration: PropTypes.array.isRequired,
  endTime: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ContestCard;
