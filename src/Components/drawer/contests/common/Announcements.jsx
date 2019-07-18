import React from 'react';
import Card from '@material/react-card';
import {
  Body1,
  Body2,
} from '@material/react-typography';
import 'tachyons';

const Announcements = () => (
  <Card className="pa2 tc mt3">
    <Body1 className="mb0">
      Announcements
    </Body1>
    <Body2 className="mid-gray">
    Contest open for 1 year with playlists problems
    </Body2>
  </Card>
);


export default Announcements;
