import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { countDownTimerValues } from '../../../../commonFunctions';

const CountDownTimer = ({ countDownTill }) => {
  const [timer, setTimer] = useState('');

  // console.log(seconds, hours, days, minutes);
  useEffect(() => {
    const {
      seconds: updatedSeconds,
      minutes: updatedMinutes,
      days: updatedDays,
      hours: updatedHours,
    } = countDownTimerValues(countDownTill);
    let timeout = '';
    if (updatedSeconds === null) {
      setTimer('FINISHED');
    } else {
      timeout = setTimeout(() => {
        setTimer(`${updatedDays}:${updatedHours}:${updatedMinutes}:${updatedSeconds}`);
      }, 1000);
    }
    return () => clearInterval(timeout);
  }, [countDownTill, timer]);

  return <div>{timer}</div>;
};

CountDownTimer.propTypes = {
  countDownTill: PropTypes.string.isRequired,
};

export default CountDownTimer;
