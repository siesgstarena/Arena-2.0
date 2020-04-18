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
