/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloContainer from './ApolloContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApolloContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
