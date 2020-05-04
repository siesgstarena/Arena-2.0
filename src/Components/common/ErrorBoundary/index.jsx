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
};

export default ErrorBoundary;
