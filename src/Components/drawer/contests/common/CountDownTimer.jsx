/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { countDownTimerValues } from '../../../../commonFunctions';

const CountDownTimer = ({ countDownTill }) => {
  const [timer, setTimer] = useState('');
  const currentDate = new Date();
  countDownTill = new Date(Number(countDownTill));
  useEffect(() => {
    // effect for updating the timer
    let timeout = '';
    // used setTimeout for triggering the update after 1 sec
    timeout = setTimeout(() => {
      const {
        seconds: updatedSeconds,
        minutes: updatedMinutes,
        days: updatedDays,
        hours: updatedHours,
      } = countDownTimerValues(currentDate, countDownTill);
      if (updatedSeconds == null) {
        setTimer('FINISHED');
      } else {
        setTimer(`${updatedDays}:${updatedHours}:${updatedMinutes}:${updatedSeconds}`);
      }
    }, 1000);
    return () => clearInterval(timeout);
  }, [countDownTill, timer, currentDate]);

  return <div>{timer}</div>;
};

CountDownTimer.propTypes = {
  countDownTill: PropTypes.string.isRequired,
};

export default CountDownTimer;
