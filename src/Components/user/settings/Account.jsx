import React from 'react';
import PropTypes from 'prop-types';
import { Headline4, Headline6, Body1 } from '@material/react-typography';

const Account = ({ username }) => (
  <div className="">
    <Headline4 className="purple mb2">Account</Headline4>
    <Headline6 className="mt3 mb0">Your username</Headline6>
    <Body1 className="mt0">
      <span className="mid-gray">http://arena.siesgst.ac.in/@</span>
      {username}
    </Body1>
    <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
  </div>
);

Account.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Account;
