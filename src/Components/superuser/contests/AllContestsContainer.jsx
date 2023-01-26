import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTEST_DETAILS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import AllContestPage from './AllContests';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import CustomSnackbar from '../../common/Snackbar/index';
import { superuserContestsLimit } from '../../../utils/constants';

const AllContestsContainer = () => {
  const limit = superuserContestsLimit;
  const activePageNumber = useActivePageState();
  const { loading, error, data } = useQuery(GET_ALL_CONTEST_DETAILS, {
    variables: { limit, skip: (activePageNumber - 1) * limit },
  });
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const [snackbarMessage, setSnackbarMessage] = useState(
    state && state.snackbarMessage ? state.snackbarMessage : ''
  );

  // This useEffect logic removes the snackbar message from the state
  // and thereby avoiding the snackbar message being showed everytime the user visits the website
  useEffect(() => {
    if (state && state.snackbarMessage) {
      delete state.snackbarMessage;
      history.replace({ location, state });
    }
  }, [history, location, state]);

  if (loading) {
    return (
      <div className="mw7 center pa2">
        <AllContestPage loading setSnackbarMessage={setSnackbarMessage} />
      </div>
    );
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.allContests) {
    const { contests } = data.allContests;
    return (
      <div className="mw7 center pa2">
        <AllContestPage contests={contests} setSnackbarMessage={setSnackbarMessage} />
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.allContests.pageCount}
            activePageNumber={activePageNumber}
          />
        </div>
        <CustomSnackbar setSnackbarMessage={setSnackbarMessage} snackbarMessage={snackbarMessage} />
      </div>
    );
  }

  // Random errors which are not catched by graphql
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default AllContestsContainer;
