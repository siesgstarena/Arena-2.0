import React, { useState } from 'react';
import Card from '@material/react-card';
import { useApolloClient } from '@apollo/client';
import { Headline6, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material/react-button';
import queryString from 'query-string';
import AlertBox from '../../common/AlertBox/index';
import '@material/react-dialog/dist/dialog.css';
import { DELETE_CONTEST } from '../../../graphql/mutations';
import { GET_ALL_CONTEST_DETAILS, GET_CONTEST_HOMEPAGE_DETAILS } from '../../../graphql/queries';
import { superuserContestsLimit } from '../../../utils/constants';

const ContestCard = ({ name, startTime, duration, endTime, code, setSnackbarMessage }) => {
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the contest - "${name}"`;
  const history = useHistory();
  const location = useLocation();
  let { pageNumber } = queryString.parse(location.search);
  pageNumber = pageNumber || 1;

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
      refetchQueries: [
        {
          query: GET_CONTEST_HOMEPAGE_DETAILS,
        },
      ],
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.deleteContest.success) {
          try {
            const { allContests } = cache.readQuery({
              query: GET_ALL_CONTEST_DETAILS,
              variables: {
                skip: superuserContestsLimit * (pageNumber - 1),
                limit: superuserContestsLimit,
              },
            });
            cache.writeQuery({
              query: GET_ALL_CONTEST_DETAILS,
              variables: {
                skip: superuserContestsLimit * (pageNumber - 1),
                limit: superuserContestsLimit,
              },
              data: {
                allContests: {
                  ...allContests,
                  contests: allContests.contests.filter((contest) => contest.code !== code),
                },
              },
            });
          } catch (e) {
            // We should always catch here,
            // as the cache may be empty or the query may fail
          }
        }
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
        {duration}
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
  duration: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ContestCard;
