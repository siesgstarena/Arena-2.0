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
    // yellow
    return '#FDA50F';
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

export const countDownTimerValues = (dateFromCountdown, dateTillCountdown) => {
  if (typeof dateTillCountdown === 'string') {
    dateTillCountdown = Number(dateTillCountdown);
  }
  // dateTillCountdown = subtracting330Minutes(dateTillCountdown);
  const dateFromObject = new Date(Number(dateFromCountdown));
  const dateFromInMilliseconds = dateFromObject.getTime();
  const timeleft = new Date(dateTillCountdown) - dateFromInMilliseconds;
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  if (minutes < 10 && minutes >= 0) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10 && seconds >= 0) {
    seconds = `0${seconds}`;
  }
  if (days < 10 && days >= 0) {
    days = `0${days}`;
  }
  if (hours < 10 && hours >= 0) {
    hours = `0${hours}`;
  }
  if (days < 0) {
    return {
      seconds: null,
      days: null,
      minutes: null,
      hours: null,
    };
  }
  return {
    seconds,
    days,
    minutes,
    hours,
  };
};

export const getSubmissionColor = (submissionStatus) => {
  if (submissionStatus === 'Time Limit Exceeded' || submissionStatus === 'Compilation Error') {
    return '#ffc107';
  }
  if (submissionStatus === 'Wrong Answer' || submissionStatus === 'Runtime Error') {
    return '#dc3545';
  }
  if (submissionStatus === 'Accepted') {
    return '#28a745';
  }
  return '#dc3545';
};

export const languageCodeAppender = (code, language) => {
  if (language === 'C') {
    code = `\`\`\`c\n${code}`;
  } else if (language === 'C++' || language === 'C++14') {
    code = `\`\`\`c++\n${code}`;
  } else if (language === 'Python' || language === 'Python3') {
    code = `\`\`\`py\n${code}`;
  } else if (language === 'Javascript') {
    code = `\`\`\`js\n${code}`;
  } else if (language === 'Go') {
    code = `\`\`\`go\n${code}`;
  } else if (language === 'Java') {
    code = `\`\`\`java\n${code}`;
  }
  return code;
};

export const problemBackgroundColor = (solved, attempts) => {
  if (solved > 0) return '#02b32826';
  if (solved === 0 && attempts > 0) return '#d60b0b1c';
  return '#ffffff';
};
