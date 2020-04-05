import React from 'react';
import './Alert.css';

const Alert = ({ message, type }) => {
  const typeList = ['error', 'success', 'info'];
  if (message.length > 0 && typeList.includes(type.toLowerCase())) {
    return (
      <div className={`Alert ${type}`}>
        {message}
      </div>
    );
  }
  return false;
};

export default Alert;
