const StringFormatter = require('./stringformatter');

class RemoveSomething extends StringFormatter {
  constructor(reg) {
    super();
    this.needToDelete = reg;
  }

  removeNonUniqueChars(string) {
    const stringInArr = string.split('');
    const matchesArray = string.matchAll(this.needToDelete);
    const matchAll = Array.from(matchesArray);
    for (let i = matchAll.length - 1; i >= 0; i -= 1) {
      stringInArr.splice(matchAll[i].index, matchAll[i][0].length);
    }
    return stringInArr.join('');
  }
}
module.exports = RemoveSomething;
