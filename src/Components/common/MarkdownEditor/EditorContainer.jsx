import React from 'react';
import PropTypes from 'prop-types';
import { Body1 } from '@material/react-typography';
import './EditorContainer.scss';

const EditorContainer = ({ children, title }) => (
  <div className="container">
    <Body1 className="ma0 pa0">{title}</Body1>
    {children}
  </div>
);

EditorContainer.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default EditorContainer;
