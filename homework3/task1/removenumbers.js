const StringFormatter = require('./stringformatter');

class RemoveNumbers extends StringFormatter {
  constructor() {
    super();
    this.needToDelete = /\d/;
  }

  removeNonUniqueChars(string) {
    return string.split(this.needToDelete).join('');
  }
}
module.exports = RemoveNumbers;
