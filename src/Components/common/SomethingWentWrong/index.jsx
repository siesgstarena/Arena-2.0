import React from 'react';
import {
  Headline3,
  Headline6,
} from '@material/react-typography';
import PropTypes from 'prop-types';
import 'tachyons';

const SomethingWentWrong = ({ message = 'An error has been encountered' }) => (
  <div className="mw6 center">
    <Headline3 className="red tc mb4">Something Went Wrong</Headline3>
    <img alt="something-went-wrong" src="https://res.cloudinary.com/ashokc/image/upload/f_auto,q_auto/v1589006297/arena/assets/undraw_bug_fixing_oc7a_zx8vqf.svg" />
    <Headline6 className="tc red mt2 mb3">
      {message}
    </Headline6>
  </div>
);

SomethingWentWrong.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SomethingWentWrong;
