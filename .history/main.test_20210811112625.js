const main = require('./main');

test('output date equals correct value', () => {
  expect(main.default.outputDate(['01.01.2000', '01.01.2016'])).toBe('16 years, total 5844 days');
});