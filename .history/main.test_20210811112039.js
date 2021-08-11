const main = require('./main');

test('adds 1 + 2 to equal 3', () => {
  console.log('main', main);
  expect(main.outputDate(['01.01.2000', '01.01.2016'])).toBe('16 years, total 5844 days');
});