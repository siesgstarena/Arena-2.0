import React from 'react';
import {
  Headline3
} from '@material/react-typography';
import 'tachyons';

const Schedule = () => (
  <div class="flex flex-wrap mw8 center">
  <Headline3 className="purple ma3">
              Contests
  </Headline3>
  <div class="w-100 pa3 ma2">
  <span class="w-100 pa3 mr2">
    <code>Round</code>
  </span>
  <span class="w-25 pa3 mr2">
    <code>
Start</code>
  </span>
  <span class="w-25 pa3 mr2">
    <code>End</code>
  </span>
  <span class="w-25 pa0 fr">
    <code>Duration</code>
  </span>
  
  </div>
  <div class="ba w-100 pa3 ma2 br2 b--blue">
  <span class="w-100 pa3 mr2">
    <code>Round 1C 2019</code>
  </span>
  <span class="w-25 pa3 mr2">
    <code>
May 4 2019, 09:00</code>
  </span>
  <span class="w-25 pa3 mr2">
    <code>May 4 2019, 11:30</code>
  </span>
  <span class="w-25">
    <code>2 hrs 30 minssss</code>
  </span>
  <span class="w-25 fr">
    <code>Move to contest</code>
  </span>

  
  </div>
  
</div>
);

export default Schedule;
