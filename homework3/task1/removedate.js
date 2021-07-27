const StringFormatter = require('./stringformatter');

class RemoveDate extends StringFormatter {
  constructor() {
    super();
    this.needToDelete = [
      /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/g,
      /(19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)/g,
    ];
  }

  removeNonUniqueChars(string) {
    let acc = string;
    this.needToDelete.forEach((item) => {
      acc = acc.replace(item, '');
    });
    return acc;
  }
}
module.exports = RemoveDate;
