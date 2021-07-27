const StringFormatter = require('./stringformatter');
const RemoveDate = require('./removedate');
const RemoveNumbers = require('./removenumbers');
const RemoveSomething = require('./removesomething');

const testMatchsymbols = new StringFormatter();
console.log(testMatchsymbols.removeNonUniqueChars('Hello, world!'));
const testNumbers = new RemoveNumbers();
console.log(testNumbers.removeNonUniqueChars('h3ll0 w0rd231'));
const testDate = new RemoveDate();
console.log(testDate.removeNonUniqueChars('Lorem12/10/2011 Ipsum12/10/2011'));
const testSometh = new RemoveSomething(/[abc]/g);
console.log(testSometh.removeNonUniqueChars('a 1214;;ddda abc   ab ;;;d33'));
