import { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';

const useRedirectLoggedInUser = () => {
  const { authState } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const { state } = location;
  // Not allowing the user to visit auth pages when the user is logged in
  // This function will only be executed when the component is mounted
  useEffect(() => {
    if ((authState && authState.user.name)
    && (!state || !state.isSessionExpired) && (!state || !state.logout)) {
      // Redirecting the user to profile page if authState has user details
      // and if session is not expired
      // and if we are not logging out
      history.push(`/profile/${authState.user.userId}`);
    }
  }, [history, authState, state]);
};

export default useRedirectLoggedInUser;
