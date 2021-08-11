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
    return null;
}

ngOnInit() {
  let diff = this.getDiff(new Date('2016-01-01'), new Date('2016-08-01'));
  console.log('diff', diff);
}

getDiff(d1, d2) {
  return `${this.yearDiff(d1, d2)} ${this.monthDiff(
    d1,
    d2
  )} ${this.totalDayDiff(d1, d2)}`;
}

monthDiff(d1, d2) {
  var months;
  if (d1.getMonth() > d2.getMonth()) {
    months = 12;
    months -= d1.getMonth();
    months += d2.getMonth();
  } else {
    months = 0;
    months -= d1.getMonth();
    months += d2.getMonth();
  }
  return months <= 0 ? '' : `${months} ${this.pluralise(months, 'month')},`;
}

totalDayDiff(d1, d2) {
  var diff = Math.floor(d2.getTime() - d1.getTime());
  var day = 1000 * 60 * 60 * 24;
  var days = Math.floor(diff / day);
  return `total ${days} ${this.pluralise(days, 'day')}`;
}

yearDiff(d1, d2) {
  let years = d2.getFullYear() - d1.getFullYear();
  return years > 0 ? `${years} ${this.pluralise(years, 'year')},` : '';
}

pluralise(count, word) {
  return count > 1 ? `${word}s` : word;
}