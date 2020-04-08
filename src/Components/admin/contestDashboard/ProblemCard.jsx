import React, { useState } from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
// import { useApolloClient } from '@apollo/react-hooks';
import AlertBox from '../../common/AlertBox/index';
import '@material/react-dialog/dist/dialog.css';
import useSessionExpired from '../../../customHooks/useSessionExpired';
// import { GET_ADMIN_DASHBOARD_DETAILS } from '../../../graphql/queries';

const ProblemCard = ({
  name, id, points, setSnackbarMessage, refetch,
}) => {
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the problem - "${name}"`;
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const history = useHistory();
  // const client = useApolloClient();
  const { contestId } = useParams();
  // onAlertAccept runs when the user clicks on the accept button on the alert box
  const onAlertAccept = () => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/${contestId}/${id}/delete`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        if (isSessionExpired(jsonResponse.data.restAPI)) {
          redirectOnSessionExpiredAfterRender();
        }
        if (jsonResponse.data.restAPI.success === true) {
          // const { adminDashboard } = client.readQuery({
          //   query: GET_ADMIN_DASHBOARD_DETAILS,
          //   variables: { code: contestId },
          // });
          // console.log(adminDashboard);
          // adminDashboard.problems = [];
          // // console.log(updatedData, adminDashboard);
          // client.writeQuery({
          //   query: GET_ADMIN_DASHBOARD_DETAILS,
          //   variables: { code: contestId },
          //   data: {
          //     adminDashboard,
          //   },
          // });
          setSnackbarMessage('Problem successfully deleted');
          refetch();
        } else {
          setSnackbarMessage('Unable to delete the problem');
        }
      }).catch(() => {
        setSnackbarMessage('An unexpected error has been encountered.');
        // setSnackbarMessage('An unexpected error has been encountered');
      });
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
  setSnackbarMessage: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default React.memo(ProblemCard);
