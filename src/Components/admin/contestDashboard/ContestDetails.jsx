import React from 'react';
import { Link } from 'react-router-dom';
import { Body1, Headline5 } from '@material/react-typography';

const contestDetails = () => (
  <div className="">
    <Headline5 className="mt3 mb3 mid-gray">
      <Link to="/contests/id" className="no-underline blue dim">
        Single Round Match #1
      </Link>
    </Headline5>
    <Body1 className="ma0 mid-gray">
      Starts on:
      &nbsp;
      Sun Aug 12 2018 00:30:00 GMT+0530 (India Standard Time)
    </Body1>
    <Body1 className="ma0 mid-gray">
      Ends on:
      &nbsp;
      Sun Aug 12 2018 00:30:00 GMT+0530 (India Standard Time)
    </Body1>

  </div>
);

export default contestDetails;
