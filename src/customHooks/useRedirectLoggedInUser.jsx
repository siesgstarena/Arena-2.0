import { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const useRedirectLoggedInUser = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { state } = location;

  // Not allowing the user to visit auth pages when the user is logged in
  // This function will only be executed when the component is mounted
  useEffect(() => {
    if (user && (!state || !state.isSessionExpired)) {
      history.push(`/profile/${user.userId}`);
    }
  }, [history, user, state]);
};

export default useRedirectLoggedInUser;
