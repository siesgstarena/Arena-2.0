import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import App from './App';
import * as serviceWorker from './serviceWorker';

// initialising sentry for error logging
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
});

// Initialising apollo graphql
const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_SERVER_BASE_URL}/graphql`,
  credentials: 'include',
});

// Initialising the cache
const cache = new InMemoryCache();

// Initialising the client
const client = new ApolloClient({
  link: httpLink,
  cache,
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
