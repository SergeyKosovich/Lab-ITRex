/* eslint class-methods-use-this: ["error", { "exceptMethods":
["sum", "divide", "multiply", "subtract"] }] */
class Calc {
  sum(a, b) {
    return a + b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }

  subtract(a, b) {
    return a - b;
  }
}
module.exports = Calc;
