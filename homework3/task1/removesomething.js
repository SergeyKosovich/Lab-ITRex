const StringFormatter = require('./stringformatter');

class RemoveSomething extends StringFormatter {
  constructor(reg) {
    super();
    this.needToDelete = reg;
  }

  removeNonUniqueChars(string) {
    return string.split(this.needToDelete).join('');
  }
}
module.exports = RemoveSomething;
