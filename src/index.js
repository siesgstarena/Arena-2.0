import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as Sentry from '@sentry/browser';
import App from './App';
import * as serviceWorker from './serviceWorker';

// initialising sentry for error logging
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
serviceWorker.unregister();
