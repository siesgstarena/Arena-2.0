import React, { useState } from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import { useApolloClient } from '@apollo/client';
import AlertBox from '../../common/AlertBox/index';
import '@material/react-dialog/dist/dialog.css';
import useSentry from '../../../customHooks/useSentry';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import { GET_ADMIN_DASHBOARD_DETAILS, GET_CONTEST_DASHBOARD } from '../../../graphql/queries';

const ProblemCard = ({ name, code, points, setSnackbarMessage }) => {
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const { logError } = useSentry();
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the problem - "${name}"`;
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const history = useHistory();
  const client = useApolloClient();
  const { contestId } = useParams();

  // deleteProblem runs when the user clicks on the accept button on the alert box
  const deleteProblem = () => {
    setSnackbarMessage('Deleting problem, please wait');
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/${contestId}/${code}/delete`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (isSessionExpired(jsonResponse.data.restAPI)) {
          redirectOnSessionExpiredAfterRender();
          return;
        }
        if (jsonResponse.data.restAPI.success === true) {
          // reading the adminDashboard query
          const { adminDashboard: oldAdminDashboard } = client.readQuery({
            query: GET_ADMIN_DASHBOARD_DETAILS,
            variables: { code: contestId },
          });
          // updating the cache
          client.writeQuery({
            query: GET_ADMIN_DASHBOARD_DETAILS,
            variables: { code: contestId },
            data: {
              adminDashboard: {
                ...oldAdminDashboard,
                // removing the deleted problem
                problems: oldAdminDashboard.problems.filter((problem) => problem.code !== code),
              },
            },
          });
          try {
            const { dashboard } = client.readQuery({
              query: GET_CONTEST_DASHBOARD,
              variables: {
                code: contestId,
              },
            });
            client.writeQuery({
              query: GET_CONTEST_DASHBOARD,
              variables: {
                code: contestId,
              },
              data: {
                dashboard: {
                  ...dashboard,
                  contests: dashboard.filter((problem) => problem.problemDetails.code !== code),
                },
              },
            });
          } catch (e) {
            console.log(e);
            // We should always catch here,
            // as the cache may be empty or the query may fail
          }
          setSnackbarMessage('Problem successfully deleted');
        } else {
          logError('REST API, deleteProblem', { ...jsonResponse.data });
          setSnackbarMessage('Unable to delete the problem');
        }
      })
      .catch((error) => {
        logError('REST API, deleteProblem', { ...error });
        setSnackbarMessage('An unexpected error has been encountered.');
        // setSnackbarMessage('An unexpected error has been encountered');
      });
  };
  const onProblemNameClick = () => {
    history.push(`/admin/${contestId}/${code}`);
  };
  const onTestClick = () => {
    history.push(`/admin/${contestId}/${code}/test`);
  };
  const onEditClick = () => {
    history.push(`/admin/${contestId}/${code}/edit`);
  };
  const onDeleteClick = () => {
    setIsAlertOpen(true);
  };
  const onResetStatusClick = () => {
    history.push(`/admin/${contestId}/reset/${code}`);
  };

  return (
    <div className="ba br4 b--black-20 pa3 mt2">
      <Headline6 className="mt0 mid-gray mb2 pointer dim" onClick={onProblemNameClick}>
        {name}
      </Headline6>
      <Body1 className="mid-gray">
        {code}
        &nbsp; - &nbsp;
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
        onAccept={deleteProblem}
      />
    </div>
  );
};

ProblemCard.propTypes = {
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  setSnackbarMessage: PropTypes.func,
  code: PropTypes.string.isRequired,
};

export default React.memo(ProblemCard);
