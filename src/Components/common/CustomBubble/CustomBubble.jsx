import React from 'react';
import { Body2 } from '@material/react-typography';
import PropTypes from 'prop-types';
import './CustomBubble.css';

const CustomBubble = ({ content, className = '', bubbleType }) => {
  const chatClass = (bubbleType === 'chat') ? 'tri-right right-top' : '';
  return (
    <div className={`talk-bubble ${chatClass} ${className}`}>
      <Body2 className="ma0 black-60">{content}</Body2>
    </div>
  );
};
CustomBubble.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  bubbleType: PropTypes.string,
};
export default CustomBubble;
