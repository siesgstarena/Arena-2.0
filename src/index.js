import React from 'react';
import './index.scss';
import * as Sentry from '@sentry/browser';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

// initialising sentry for error logging
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// eslint-disable-next-line react/jsx-filename-extension
root.render(<App />);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
serviceWorker.unregister();
