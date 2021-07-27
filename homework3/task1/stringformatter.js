/* eslint class-methods-use-this: ["error", { "exceptMethods": ["removeNonUniqueChars"] }] */
class StringFormatter {
  removeNonUniqueChars(string) {
    return Array.from(new Set(string.split(''))).join('');
  }
}
module.exports = StringFormatter;
