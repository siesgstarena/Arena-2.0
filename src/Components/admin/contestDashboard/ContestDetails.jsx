import React from 'react';
import { Link } from 'react-router-dom';
import { Headline6, Headline5 } from '@material/react-typography';

const contestDetails = () => (
  <div className="">
    <Headline5 className="mt3 mb3 mid-gray">
      <Link to="/contests/id" className="no-underline blue dim">
        Single Round Match #1
      </Link>
    </Headline5>
    <Headline6 className="ma0 mid-gray">
      Starts on:
      &nbsp;
      Sun Aug 12 2018 00:30:00 GMT+0530 (India Standard Time)
    </Headline6>
    <Headline6 className="ma0 mid-gray">
      Ends on:
      &nbsp;
      Sun Aug 12 2018 00:30:00 GMT+0530 (India Standard Time)
    </Headline6>

  </div>
);

export default contestDetails;
