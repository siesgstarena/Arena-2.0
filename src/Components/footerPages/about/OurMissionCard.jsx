import React from 'react';
import Card from '@material/react-card';
import {
  Body1,
} from '@material/react-typography';
import 'tachyons';

const OurMission = () => (
  <Card className="pa3 mw5 mw6-m mw6-l center ma4 ba br2 shadow-1 tc" style={{ borderColor: 'purple' }}>
    { /*
        mw6 -> MaxWidth6
        mb3 -> MarginBottom3
        mt4 -> MarginTop4
        tc -> TextCenter
        mw6-m -> MaxWidth6 on medium sized devices
        mw6-l -> MaxWidth6 on large sized devices
      */
    }
    <Body1>
      Our mission is to help programmers learn, share and improve
      themselves in the world of algorithms and competitive programming.
    </Body1>
  </Card>
);

export default OurMission;
