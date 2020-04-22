import React, { useState, useEffect } from 'react';
import { countDownTimerValues } from '../../../../commonFunctions';

const CountDownTimer = ({ countDownTill }) => {
  const [timer, setTimer] = useState('');

  // console.log(seconds, hours, days, minutes);
  useEffect(() => {
    const {
      seconds: updatedSeconds, minutes: updatedMinutes, days: updatedDays, hours: updatedHours,
    } = countDownTimerValues(countDownTill);
    if (updatedSeconds === null) {
      setTimer('FINISHED');
    } else {
      const timeout = setTimeout(() => {
        setTimer(`${updatedDays}:${updatedHours}:${updatedMinutes}:${updatedSeconds}`);
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [countDownTill, timer]);

  return (
    <div>
      {timer}
    </div>
  );
};

export default CountDownTimer;
