function bulbs(lamps, lampsArray) {
  const currentArray = [];
  for (let i = 1; i <= lamps; i += 1) {
    currentArray.push(i);
  }
  lampsArray.forEach((item) => {
    for (let i = item; i <= currentArray.length; i += item) {
      if (currentArray[i - 1] === false) {
        currentArray[i - 1] = true;
      } else {
        currentArray[i - 1] = false;
      }
    }
  });
  return currentArray.filter((item) => {
    if (item === false) {
      return true;
    }
    return false;
  }).length;
}
console.log(bulbs(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));
console.log(bulbs(20, [2, 3, 8]));
