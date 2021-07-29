function buildNumber(num, numbersRom, lastnum, acc) {
  let number = num;
  let accum = acc;
  let lastNum = lastnum;
  if (number > 0 && number >= numbersRom[lastNum][0]) {
    accum += numbersRom[lastNum][1];
    number -= numbersRom[lastNum][0];
    return buildNumber(number, numbersRom, lastNum, accum);
  }
  if (number > 0) {
    lastNum -= 1;
    return buildNumber(number, numbersRom, lastNum, accum);
  }
  return accum;
}
module.exports = buildNumber;
