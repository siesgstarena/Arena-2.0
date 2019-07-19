import React from 'react';
import { Headline4, Headline6, Body1 } from '@material/react-typography';

const Account = () => (
  <div className="">
    <Headline4 className="purple mb2">Account</Headline4>
    <Headline6 className="mt3 mb0">Your username</Headline6>
    <Body1 className="mt0">
      <span className="mid-gray">http://arena.siesgst.ac.in/@</span>
      Swpanil76
    </Body1>
    <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
  </div>
);

export default Account;
