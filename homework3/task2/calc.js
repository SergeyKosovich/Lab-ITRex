const Converter = require('./converter');

class Calc extends Converter {
  sum(a, b) {
    const sum = a + b;
    return this.convert(sum);
  }

  divide(a, b) {
    const divide = a / b;
    return this.convert(divide);
  }

  multiply(a, b) {
    const multiply = a * b;
    return this.convert(multiply);
  }

  subtract(a, b) {
    const subtract = a - b;
    return this.convert(subtract);
  }
}
module.exports = Calc;
