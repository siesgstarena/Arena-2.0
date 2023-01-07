import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { ThemeProvider } from 'styled-components';
// import useDarkMode from './customHooks/useDarkMode';
// import GlobalStyles from './Components/common/GlobalStyles';
// import { lightTheme, darkTheme } from './Theme';
// import Toggle from './Components/common/ThemeToggle';
import Routes from './Routes';

// Initialising apollo graphql
const httpLink = new HttpLink({
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

const App = () => {
  // const [theme, themeToggler, mountedComponent] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // if (!mountedComponent) return <div />;
  return (
    // <ThemeProvider theme={themeMode}>
    // <GlobalStyles />
    // <Toggle theme={theme} toggleTheme={themeToggler} />
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
    // </ThemeProvider>
  );
};

export default App;
