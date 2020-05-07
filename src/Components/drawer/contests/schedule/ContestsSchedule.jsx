import React from 'react';
import PropTypes from 'prop-types';
import { Headline6, Headline4 } from '@material/react-typography';
import '../../../common/Table/index.scss';
import 'tachyons';

const ContestsScehdule = ({ children }) => (
  <div className="pa2 mw8-ns center">
    <Headline4 className="purple mt2">Contests</Headline4>
    <Headline6 className="purple mb2 mt1">Current or Upcoming Contests</Headline6>
    {children}
  </div>
);

ContestsScehdule.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ContestsScehdule;
