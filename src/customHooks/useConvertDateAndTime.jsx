/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
const useConvertDateAndTime = () => {
  // date and time accepted is in the format of milliseconds from midnight of January 1, 1970
  const convertDate = (milliSeconds) => {
    if (typeof milliSeconds === 'string') {
      milliSeconds = Number(milliSeconds);
    }
    const dateObject = new Date(milliSeconds);
    const date = dateObject.toDateString();
    return date;
  };
  const convertTime = (milliSeconds) => {
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

  return { convertDate, convertTime };
};

export default useConvertDateAndTime;
