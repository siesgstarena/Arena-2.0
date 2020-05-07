import { useContext } from 'react';
import * as Sentry from '@sentry/browser';
import AuthContext from '../Contexts/AuthContext';

const useSentryErrorLogging = () => {
  const { authState } = useContext(AuthContext);
  const logError = (errorName, additionalDetailsObject) => {
    // addtionalDetailsObject should not contain any nested key value pair.
    Sentry.setContext('Additional Details', additionalDetailsObject);
    if (authState.user) {
      Sentry.setUser({
        email: authState.user.email,
        id: authState.user.userId,
        username: authState.user.name,
      });
    } else {
      Sentry.setUser({
        email: 'Not logged in',
        id: 'Not logged in',
        username: 'Not logged in',
      });
    }
    Sentry.captureException(new Error(errorName));
  };
  return { logError };
};

export default useSentryErrorLogging;
