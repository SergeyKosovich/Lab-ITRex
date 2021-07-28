function morzeconverter(number) {
  if (number < 0) {
    return 'works for 0>result only';
  }
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const morzeNum = ['– – – – –', '• – – – –', '• • – – –', '• • • – –', '• • • • –', '• • • • •', '– • • • •', '– – • • •', '– – – • •', '– – – – •'];
  return number
    .toString()
    .split('')
    .map((item) => morzeNum[numbers.indexOf(+item)])
    .join('  ');
}
module.exports = morzeconverter;
