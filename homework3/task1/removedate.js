const StringFormatter = require('./stringformatter');

class RemoveDate extends StringFormatter {
  constructor() {
    super();
    this.needToDelete = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/g;
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
module.exports = RemoveDate;
