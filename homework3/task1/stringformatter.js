/* eslint class-methods-use-this: ["error", { "exceptMethods": ["removeNonUniqueChars"] }] */
class StringFormatter {
  removeNonUniqueChars(string) {
    const stringInArr = string.split('');
    const acc = [];
    for (let i = 0; i < stringInArr.length; i += 1) {
      if (!acc.includes(stringInArr[i])) {
        acc.push(stringInArr[i]);
      }
    }
    return acc.join('');
  }
}
module.exports = StringFormatter;
