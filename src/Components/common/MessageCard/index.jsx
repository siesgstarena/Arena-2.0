import React from 'react';
import Card from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';
import PropTypes from 'prop-types';
import {
  Body1,
} from '@material/react-typography';
import './index.css';
import 'tachyons';

// This component displays the message on screen
// To display the error, you need to pass message as prop to this component
// messageType is basically used to apply appropritate styles to the component

const MessageCard = ({ message, messageType, setMessageType }) => {
  if (messageType === 'error') {
    return (
      <Card
        className="mt3 mb3 pl3 pr3"
        style={{
          backgroundColor: '#f8d7da', color: '#721c24', borderColor: '#f5c6cb', boxShadow: '0px 0px 0px 0px',
        }}
      >
        <Body1 className="flex items-center justify-between">
          {message}
          <span role="presentation" onClick={() => setMessageType('')} className="pointer"><MaterialIcon icon="close" /></span>
        </Body1>
      </Card>
    );
  }
  if (messageType === 'success') {
    return (
      <Card
        className="mt3 mb3 pl3 pr3"
        style={{
          color: '#155724',
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb',
          boxShadow: '0px 0px 0px 0px',
        }}
      >
        <Body1 className="flex items-center justify-between">
          {message}
          <span role="presentation" className="pointer" onClick={() => setMessageType('')}><MaterialIcon icon="close" /></span>
        </Body1>
      </Card>
    );
  }
  if (messageType === 'info') {
    return (
      <Card
        className="mt3 mb3 pl3 pr3"
        style={{
          color: '#004085',
          backgroundColor: '#cce5ff',
          borderColor: '#b8daff',
          boxShadow: '0px 0px 0px 0px',
        }}
      >
        <Body1 className="flex items-center justify-between">
          {message}
          <span role="presentation" onClick={() => setMessageType('')} className="pointer"><MaterialIcon icon="close" /></span>
        </Body1>
      </Card>
    );
  }
  if (messageType === 'loading') {
    return (
      <Card
        className="mt3 mb3"
        style={{
          color: '#004085',
          backgroundColor: '#cce5ff',
          borderColor: '#b8daff',
          boxShadow: '0px 0px 0px 0px',
        }}
      >
        <Body1 className="pl2 pr2 flex justify-center items-center">
          <span className="loading-spinner-container mr3" />
          {message}
        </Body1>
      </Card>
    );
  }
  return null;
};

MessageCard.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  setMessageType: PropTypes.func.isRequired,
};

export default MessageCard;
