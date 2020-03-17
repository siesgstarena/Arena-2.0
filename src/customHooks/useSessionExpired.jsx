import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const useSessionExpired = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const redirectOnSessionExpired = (response) => {
    if (response.code === '403' && response.success === false) {
      console.log('executed');
      setUser(null);
      history.push({
        pathname: '/auth/signin',
        state: {
          messageType: 'error',
          message: 'Your session has expired. Please login to continue.',
          sessionExpired: true,
        },
      });
      return true;
    }
    return false;
  };
  return redirectOnSessionExpired;
};

export default useSessionExpired;
