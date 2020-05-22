import React from 'react';
import Card from '@material/react-card';
import { Body1, Body2 } from '@material/react-typography';
import 'tachyons';

const SubmissionDetails = () => (
  <Card className="pa2 mt3">
    <Body1 className="mb0">How to submit?</Body1>
    <Body2 className="mid-gray">
      Here&apos;s a set of instructions for you to test your program before submitting.
    </Body2>
    <Body1>
      <span className="b">
        We do not allow MS TURBOC compiled solutions which includes &lt;conio.h&gt;
      </span>
    </Body1>
    <Body1 className="ma0">
      <span className="b">C</span>
    </Body1>
    <Body1 className="mb0 mt0">Make sure your program is compiled with gcc 5.1.1.</Body1>
    <Body2 className="mid-gray mt0">Sample C Solution</Body2>
    <Body1 className="ma0">
      <span className="b">C++</span>
    </Body1>
    <Body1 className="mb0 mt0">Make sure your program is compiled with g++ 5.1.1.</Body1>
    <Body2 className="mid-gray mt0">Sample C++ Solution</Body2>
    <Body1 className="ma0">
      <span className="b">Java</span>
    </Body1>
    <Body1 className="mb0 mt0">Make sure your program is compiled with jdk 8.5.1.</Body1>
    <Body2 className="mid-gray mt0">Sample Java Solution</Body2>
    <Body1 className="ma0">
      <span className="b">Python</span>
    </Body1>
    <Body1 className="mb0 mt0">
      Make sure your program is compiled with Python 2.7.1 or Python 3.4.3
    </Body1>
    <Body2 className="mid-gray mt0">Sample Python Solution</Body2>
  </Card>
);

export default SubmissionDetails;
