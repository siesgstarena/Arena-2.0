import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import App from './App';

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


const ApolloContainer = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default ApolloContainer;
