export const getTime = (befDate) => {
  const tmpMonth = befDate.getMonth() + 1;
  const tmpDate = befDate.getDate();
  const month = tmpMonth % 10 === tmpMonth ? `0${tmpMonth}` : tmpMonth;
  const date = tmpDate % 10 === tmpDate ? `0${tmpDate}` : tmpDate;

  return month + '-' + date;
};

export const timeformat = (dif) => {
  const seconds = Math.floor(dif / 1000) % 60;
  const minutes = Math.floor(dif / (1000 * 60)) % 60;
  const hours = Math.floor(dif / (1000 * 60 * 60)) % 24;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}`;
};
