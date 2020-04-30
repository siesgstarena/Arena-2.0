import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useLocation, useHistory } from 'react-router-dom';
import { GET_ALL_BLOGS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import AllBlogsPage from './AllBlogsPage';
import PageCountDisplayer from '../../../common/PageCountDisplayer';
import Spinner from '../../../common/Spinner/index';
import useActivePageState from '../../../../customHooks/useAcitvePageState';
import CustomSnackbar from '../../../common/Snackbar/index';

const AllBlogsPageContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const limit = 15;
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const [snackbarMessage, setSnackbarMessage] = useState(state && state.snackbarMessage ? state.snackbarMessage : '');

  // This useEffect logic removes the snackbar message from the state
  // and thereby avoiding the snackbar message being showed everytime the user visits the website
  useEffect(() => {
    if (state && state.snackbarMessage) {
      delete state.snackbarMessage;
      history.replace({ location, state });
    }
  }, [history, location, state]);
  const activePageNumber = useActivePageState();
  const {
    loading, error, data, networkStatus,
  } = useQuery(GET_ALL_BLOGS, {
    variables: { limit, skip: ((activePageNumber - 1) * limit) },
    notifyOnNetworkStatusChange: true,
  });
  if (networkStatus === 3) return <Spinner />;

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.blogs) {
    const { blogs } = data.blogs;
    return (
      <div className="mw7 ma3 pa2 center">
        <AllBlogsPage
          blogs={blogs}
          setSnackbarMessage={setSnackbarMessage}
        />
        <div>
          <PageCountDisplayer
            pageCount={data.blogs.pages}
            activePageNumber={activePageNumber}
          />
        </div>
        <CustomSnackbar
          setSnackbarMessage={setSnackbarMessage}
          snackbarMessage={snackbarMessage}
        />
      </div>
    );
  }
  if (isSessionExpired(data.blogs)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default AllBlogsPageContainer;
