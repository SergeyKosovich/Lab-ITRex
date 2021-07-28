const Calc = require('./calc');

class CustomCalc extends Calc {
  constructor(converter) {
    super();
    this.converter = converter;
  }

  sum(a, b) {
    const sum = super.sum(a, b);
    return this.converter(sum);
  }

  divide(a, b) {
    const divide = super.divide(a, b);
    return this.converter(divide);
  }

  multiply(a, b) {
    const multiply = super.multiply(a, b);
    return this.converter(multiply);
  }

  subtract(a, b) {
    const subtract = super.subtract(a, b);
    return this.converter(subtract);
  }
}
module.exports = CustomCalc;
