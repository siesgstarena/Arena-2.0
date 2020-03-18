/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
const useConvertDateAndTime = () => {
  const convertDateAndTime = (milliSeconds) => {
    if (typeof milliSeconds === 'string') {
      milliSeconds = Number(milliSeconds);
    }
    const dateObject = new Date(milliSeconds);
    const date = dateObject.toDateString();
    const hour = dateObject.getUTCHours() === 0
      ? 12 : (dateObject.getUTCHours() > 12
        ? dateObject.getUTCHours() - 12
        : dateObject.getUTCHours()
      );
    const min = dateObject.getUTCMinutes() < 10 ? `0${dateObject.getUTCMinutes()}` : dateObject.getUTCMinutes();
    const ampm = dateObject.getUTCHours() < 12 ? 'AM' : 'PM';
    const time = `${hour}:${min} ${ampm}`;
    return { date, time };
  };
  return convertDateAndTime;
};

export default useConvertDateAndTime;
