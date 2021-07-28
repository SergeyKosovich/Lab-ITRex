const StringFormatter = require('./stringformatter');

class RemoveNumbers extends StringFormatter {
  constructor() {
    super();
    this.needToDelete = /\d/g;
  }

  removeNonUniqueChars(string) {
    return string.replace(this.needToDelete, '');
  }
}
module.exports = RemoveNumbers;
