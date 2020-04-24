import React from 'react';
import { Body1, Headline4 } from '@material/react-typography';
import Loading from '../../../common/Loading/index';

const Uploading = () => (
  <div className="">
    <Headline4 className="tc pa0 ma0 black-70">Loading...</Headline4>
    <div className="mt5 mb5">
      <Loading />
    </div>
    <Body1 className="mid-gray tc">
      Hang in there, this may take some time... do not reload or close this page!
    </Body1>
  </div>
);

export default Uploading;
