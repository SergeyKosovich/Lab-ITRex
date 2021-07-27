/* eslint class-methods-use-this: ["error", { "exceptMethods": ["morze"] }] */
const Calc = require('./calc');

class MorzeCalc extends Calc {
  constructor() {
    super();
    this.format = 'morze';
  }

  morze(number) {
    if (number < 0) {
      throw new Error('works for >0 result only');
    }
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const morzeNum = ['– – – – –', '• – – – –', '• • – – –', '• • • – –', '• • • • –', '• • • • •', '– • • • •', '– – • • •', '– – – • •', '– – – – •'];
    const accum = [];
    const numbersArr = number.toString().split('');
    numbersArr.forEach((item) => {
      accum.push(morzeNum[numbers.indexOf(+item)]);
    });
    return accum.join('  ');
  }
}
module.exports = MorzeCalc;
