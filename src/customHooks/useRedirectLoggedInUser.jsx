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
    if ((authState && authState.user) && (!state || !state.isSessionExpired)) {
      history.push(`/profile/${authState.user.userId}`);
    }
  }, [history, authState, state]);
};

export default useRedirectLoggedInUser;
