function bulbs(lamps, lampsArray) {
  const currentArray = [];
  for (let i = 1; i <= lamps; i += 1) {
    currentArray.push(i);
  }
  lampsArray.forEach((item) => {
    for (let i = item; i <= currentArray[currentArray.length - 1]; i += item) {
      if (typeof currentArray[i - 1] === 'string') {
        currentArray[i - 1] = +currentArray[i - 1];
      } else {
        currentArray[i - 1] = `${currentArray[i - 1]}`;
      }
    }
  });
  return currentArray.reduce((sum, current) => {
    if (typeof current === 'string') {
      return sum + 1;
    }
    return sum;
  }, 0);
}
console.log(bulbs(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));
console.log(bulbs(20, [2, 3, 8]));
