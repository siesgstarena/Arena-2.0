import React from 'react';
import {
  Headline3,
  Headline6,
} from '@material/react-typography';
import PropTypes from 'prop-types';
import errorImage from './assets/error-image.png';
import 'tachyons';

const SomethingWentWrong = ({ message = 'An error has been encountered' }) => (
  <div className="mw6 center">
    <Headline3 className="purple tc mb4">Something Went Wrong</Headline3>
    <img alt="something-went-wrong" src={errorImage} />
    <Headline6 className="tc red mt2 mb3">
      {message}
    </Headline6>
  </div>
);

SomethingWentWrong.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SomethingWentWrong;
