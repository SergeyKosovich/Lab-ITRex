class Calc {
  converter(number) {
    if (this.format === 'romain') {
      return this.romain(number);
    }
    if (this.format === 'morze') {
      return this.morze(number);
    }
    return number;
  }

  sum(a, b) {
    const sum = a + b;
    return this.converter(sum);
  }

  divide(a, b) {
    const divide = a / b;
    return this.converter(divide);
  }

  multiply(a, b) {
    const multiply = a * b;
    return this.converter(multiply);
  }

  subtract(a, b) {
    const subtract = a - b;
    return this.converter(subtract);
  }
}
module.exports = Calc;
