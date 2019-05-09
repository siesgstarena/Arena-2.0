import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import {
  Body1,
} from '@material/react-typography';
import 'tachyons';

// This component displays the error message on screen
// To display the error, you need to pass errorMessage as prop to this component

const ErrorCard = ({ errorMessage }) => (
  <Card
    className="mt3 mb3"
    style={{
      backgroundColor: '#f8d7da', color: '#721c24', borderColor: '#f5c6cb', boxShadow: '0px 0px 0px 0px',
    }}
  >
    <Body1 className="tc">
      {errorMessage}
    </Body1>
  </Card>
);

ErrorCard.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorCard;
