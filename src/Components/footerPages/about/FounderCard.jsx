import React from 'react';
import Card from '@material/react-card';
import { Body1, Body2 } from '@material/react-typography';
import 'tachyons';

const FounderCard = () => (
  <Card
    className="pa1 mw6-m mw6-l mw5 center h-auto mb3 tc ba br2"
    style={{ borderColor: 'purple' }}
  >
    {/*
        pa1->PaddingAll1
        mw6->MaxWidth6
        h-auto->HeightAuto
        mb3->MarginBottom3
        mw6-m->MaxWidth6 on medium sized devices
        mw6-l->MaxWidth6 on large sized devices
      */}
    <Body1> Founded </Body1>
    <Body2 className="mid-gray">2016 </Body2>
    <Body1> Founder </Body1>
    <Body2 className="mid-gray">Omkar Prabhu </Body2>
    <Body1> First Classroom Contest </Body1>
    <Body2 className="mid-gray">October 31, 2015 </Body2>
    <Body1>Official Platform Launch</Body1>
    <Body2 className="mid-gray">November 18, 2018 (18-11-18) </Body2>
  </Card>
);

export default FounderCard;
