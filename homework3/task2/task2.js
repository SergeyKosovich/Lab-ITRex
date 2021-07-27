const Calc = require('./calc');
const RomCalc = require('./romcalc');
const MorzeCalc = require('./morzecalc');

const simple = new Calc();
console.log(simple.sum(10, 10));
console.log(simple.divide(10, 10));
console.log(simple.multiply(10, 10));
console.log(simple.subtract(10, 10));
const romain = new RomCalc();
console.log(romain.sum(10, 10));
console.log(romain.divide(10, 10));
console.log(romain.multiply(10, 10));
console.log(romain.subtract(100, 1));
const morze = new MorzeCalc();
console.log(morze.sum(10, 1));
console.log(morze.divide(10, 2));
console.log(morze.multiply(4, 2));
console.log(morze.subtract(10, 1));
