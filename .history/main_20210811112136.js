/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
  return getDateDifference(convertDateToCorrectFormat(dates[0]), convertDateToCorrectFormat(dates[1]));
}

function getDateDifference(beforeDate, afterDate) {
  if (!isBeforeDateBeforeAfterDate(beforeDate, afterDate)) {
    return new Error('First date is after second date.');
  }
  return `${yearDiff(beforeDate, afterDate) ? yearDiff(beforeDate, afterDate) + " " : ''}` +
    `${monthDifference(beforeDate, afterDate) ? monthDifference(beforeDate, afterDate) + " " : ''}` +
    `${totalDayDiff(beforeDate, afterDate)}`;
}

function convertDateToCorrectFormat(date) {
  const splitDate = date.split('.');
  return new Date(`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`);
}

function monthDifference(beforeDate, afterDate) {
  const months = getNumberedMonthDifference(beforeDate, afterDate);
  return months <= 0 ? false : `${months} ${pluralise(months, 'month')},`;
}

function getNumberedMonthDifference(beforeDate, afterDate) {
  const monthOffset = beforeDate.getMonth() > afterDate.getMonth() ? 12 : 0;
  const dayOffset = beforeDate.getDate() > afterDate.getDate() ? -1 : 0;
  return monthOffset - beforeDate.getMonth() + afterDate.getMonth() + dayOffset;
}

function totalDayDiff(beforeDate, afterDate) {
  const differenceBetweenDatesInMiliSec = Math.floor(
    afterDate.getTime() - beforeDate.getTime()
  );
  const dayInMilliSeconds = 1000 * 60 * 60 * 24;
  const days = Math.floor(
    differenceBetweenDatesInMiliSec / dayInMilliSeconds
  );
  return `total ${days} ${pluralise(days, 'day')}`;
}

function yearDiff(beforeDate, afterDate) {
  const years = Math.floor((afterDate.getTime() - beforeDate.getTime()) / (1000*60*60*24*365));
  return years > 0 ? `${years} ${pluralise(years, 'year')},` : false;
}

function pluralise(count, word) {
  return count != 1 ? `${word}s` : word;
}

function isBeforeDateBeforeAfterDate(beforeDate, afterDate) {
  if (beforeDate.getTime() <= afterDate.getTime()) {
    return true;
  }
  return false;
}

exports = { outputDate };