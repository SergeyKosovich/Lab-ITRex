const StringFormatter = require('./stringformatter');

class RemoveNumbers extends StringFormatter {
  constructor() {
    super();
    this.needToDelete = /\d/;
  }

  removeNonUniqueChars(string) {
    const stringInArr = string.split('');
    const acc = [];
    for (let i = 0; i < stringInArr.length; i += 1) {
      if (!stringInArr[i].match(this.needToDelete)) {
        acc.push(stringInArr[i]);
      }
    }
    return acc.join('');
  }
}
module.exports = RemoveNumbers;
