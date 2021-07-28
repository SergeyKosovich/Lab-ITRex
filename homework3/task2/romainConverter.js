function romainConverter(num) {
  let number = num;
  if (number <= 0) {
    return 'works for 0>result only';
  }
  const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const numbersRom = ['I', 'IV', 'V', 'IX', 'X', 'XI', 'I', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let accum = '';
  let lastNum = numbers.length - 1;
  function check() {
    if (number > 0 && number >= numbers[lastNum]) {
      accum += numbersRom[lastNum];
      number -= numbers[lastNum];
      return check();
    }
    if (number > 0) {
      lastNum -= 1;
      return check();
    }
    return false;
  }
  check();
  return accum;
}
module.exports = romainConverter;
