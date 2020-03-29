import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const useRedirectLoggedInUser = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const redirectLoggedInUser = () => {
    // Not allowing the user to visit auth pages when the user is logged in
    // This function will only be executed when the component is mounted
    useEffect(() => {
      if (user) {
        history.push(`/profile/${user.userId}`);
      }
    }, []);
  };
  return redirectLoggedInUser;
};

export default useRedirectLoggedInUser;
