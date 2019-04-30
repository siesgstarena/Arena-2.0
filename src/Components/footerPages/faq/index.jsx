import React from 'react';
import { Headline4 } from '@material/react-typography';
import ExpansionPanels from './ExpansionPanels';
import 'tachyons';

const FAQ = () => (
  <div className="ml6-l mr6-l ml2 mr2 ml4-m mr4-m">
    <Headline4 className="purple">
      Frquently Asked Questions
    </Headline4>
    <ExpansionPanels />
  </div>
);

export default FAQ;
