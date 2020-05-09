import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import SomethingWentWrong from '../SomethingWentWrong/index';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const { getLoggedInUser } = this.props;
    if (getLoggedInUser.name) {
      Sentry.setUser({
        email: getLoggedInUser.email,
        id: getLoggedInUser.userId,
        username: getLoggedInUser.name,
      });
    } else {
      Sentry.setUser({
        email: 'Not logged in',
        id: 'Not logged in',
        username: 'Not logged in',
      });
    }
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    const { state, props } = this;
    const { children } = props;
    if (state.hasError) {
      // You can render any custom fallback UI
      return <SomethingWentWrong message="An unexpected error is encountered. Please contact the developer." />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
  getLoggedInUser: PropTypes.object.isRequired,
};

export default ErrorBoundary;
