function repeat(start) {
  let increment = 2;
  let a = start;
  return function () {
    if (a % 5 === 0 && a !== 0) {
      a /= 5;
      increment = 3;
      return a;
    }
    if (a % 7 === 0 && a !== 0) {
      a -= 7;
      increment = 1;
      return a;
    }
    a += increment;
    return a;
  };
}
const decision = repeat(2);
console.log(decision());
console.log(decision());
