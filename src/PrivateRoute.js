// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from './Contexts/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props => (
        // Check if the user exists
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth/signin', state: { message: 'Please login to continue', messageType: 'error' } }} />
        ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
