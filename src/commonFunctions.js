/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
export const userColor = (ratings, userId) => {
  if (userId === '5b5c89298114180020d4bcb0') {
    return 'black';
  }
  if (ratings >= 2000) {
    return 'red';
  }
  if (ratings >= 1800 && ratings <= 1999) {
    return 'orange';
  }
  if (ratings >= 1600 && ratings <= 1799) {
    return 'yellow';
  }
  if (ratings >= 1400 && ratings <= 1599) {
    return '#9932CC';
  }
  if (ratings >= 1200 && ratings <= 1399) {
    return 'blue';
  }
  if (ratings >= 1000 && ratings <= 1199) {
    return 'green';
  }
  return 'gray';
};

export const userStatus = (ratings, userId) => {
  if (userId === '5b5c89298114180020d4bcb0') {
    return 'Headquarters';
  }
  if (ratings >= 2000) {
    return 'Legend';
  }
  if (ratings >= 1800 && ratings <= 1999) {
    return 'Master';
  }
  if (ratings >= 1600 && ratings <= 1799) {
    return 'Expert';
  }
  if (ratings >= 1400 && ratings <= 1599) {
    return 'Advanced';
  }
  if (ratings >= 1200 && ratings <= 1399) {
    return 'Intermediate';
  }
  if (ratings >= 1000 && ratings <= 1199) {
    return 'Beginner';
  }
  return 'Novice';
};

// date and time accepted is in the format of milliseconds from midnight of January 1, 1970
export const convertDate = (milliSeconds) => {
  if (typeof milliSeconds === 'string') {
    milliSeconds = Number(milliSeconds);
  }
  const dateObject = new Date(milliSeconds - (330000 * 60));
  const date = dateObject.toDateString();
  return date;
};

export const convertTime = (milliSeconds) => {
  if (typeof milliSeconds === 'string') {
    milliSeconds = Number(milliSeconds);
  }
  const dateObject = new Date(milliSeconds);
  const hour = dateObject.getUTCHours() === 0
    ? 12 : (dateObject.getUTCHours() > 12
      ? dateObject.getUTCHours() - 12
      : dateObject.getUTCHours()
    );
  const min = dateObject.getUTCMinutes() < 10 ? `0${dateObject.getUTCMinutes()}` : dateObject.getUTCMinutes();
  const ampm = dateObject.getUTCHours() < 12 ? 'AM' : 'PM';
  const time = `${hour}:${min} ${ampm}`;
  return time;
};

export const differenceInTwoDates = (
  givenDate1InMilliseconds, givenDate2InMilliseconds, digitsAfterDecimal = 0,
) => {
  if (typeof givenDate1InMilliseconds === 'string') {
    givenDate1InMilliseconds = Number(givenDate1InMilliseconds);
  }
  if (typeof givenDate2InMilliseconds === 'string') {
    givenDate2InMilliseconds = Number(givenDate2InMilliseconds);
  }
  givenDate1InMilliseconds -= (330000 * 60);
  givenDate2InMilliseconds -= (330000 * 60);
  let seconds = Math.abs((givenDate1InMilliseconds - givenDate2InMilliseconds) / 1000);
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  let months = days / 30;
  let years = days / 365;
  seconds = parseFloat(seconds.toFixed(digitsAfterDecimal));
  minutes = parseFloat(minutes.toFixed(digitsAfterDecimal));
  hours = parseFloat(hours.toFixed(digitsAfterDecimal));
  days = parseFloat(days.toFixed(digitsAfterDecimal));
  months = parseFloat(months.toFixed(digitsAfterDecimal));
  years = parseFloat(years.toFixed(digitsAfterDecimal));
  if (seconds >= 0 && seconds <= 59) {
    if (seconds === 1) {
      return [seconds, 'second'];
    }
    return [seconds, 'seconds'];
  }
  if (minutes >= 0 && minutes <= 59) {
    if (minutes === 1) {
      return [minutes, 'minute'];
    }
    return [minutes, 'minutes'];
  }
  if (hours >= 0 && hours <= 24) {
    if (hours === 1) {
      return [hours, 'hour'];
    }
    return [hours, 'hours'];
  }
  if (days >= 0 && days <= 30) {
    if (days === 1) {
      return [days, 'day'];
    }
    return [days, 'days'];
  }
  if (months >= 0 && months <= 12) {
    if (months === 1) {
      return [months, 'month'];
    }
    return [months, 'months'];
  }
  if (years === 1) {
    return [years, 'year'];
  }
  return [years, 'years'];
};
