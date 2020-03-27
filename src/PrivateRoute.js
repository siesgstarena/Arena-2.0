// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from './Contexts/UserContext';

const PrivateRoute = ({ component: Component, data, ...rest }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={props => (
        // Check if the user exists
        user ? (
          <Component {...props} {...data} />
        ) : (
          <Redirect to={{ pathname: '/auth/signin', state: { message: 'You are not logged in. Please login to continue.', messageType: 'error', from: location } }} />
        ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  data: PropTypes.any,
};

export default PrivateRoute;
