/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
export const userColor = (ratings) => {
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

export const userStatus = (ratings) => {
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
  const dateObject = new Date(milliSeconds);
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
