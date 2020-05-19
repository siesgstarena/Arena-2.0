import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Headline4, Body2 } from '@material/react-typography';
import ContestCardsArray from './ContestCardsArray';
import LoadingCardArray from '../../common/LoadingCardArray';

const AllContests = ({ contests, setSnackbarMessage, loading = false }) => {
  const history = useHistory();
  return (
    <div>
      <Headline4 className="purple mt4 mb0 ml0">Contests</Headline4>
      <Body2 className="ml0 mid-gray">
        Single Round Matches and Long Contest | &nbsp;
        <span
          className="dim pointer"
          role="presentation"
          onClick={() => history.push('/superuser/contests/create')}
        >
          Create a new contest
        </span>
      </Body2>
      {loading ? (
        <LoadingCardArray count={12} />
      ) : (
        <ContestCardsArray contests={contests} setSnackbarMessage={setSnackbarMessage} />
      )}
    </div>
  );
};

AllContests.propTypes = {
  contests: PropTypes.array,
  loading: PropTypes.bool,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default AllContests;
