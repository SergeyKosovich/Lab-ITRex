function findKayakAmount(arr, weight) {
  let counter = 0;
  const half = Math.floor(arr.length / 2);
  arr.sort((a, b) => b - a);
  let a = [];
  function checkPassengers() {
    a = [];
    arr.forEach((item, ind) => {
      for (let index = ind + 1; index < arr.length; index += 1) {
        if (weight - item > arr[index]) {
          a.push([item, arr[index]]);
        }
      }
    });
    if (a.length > 0) {
      arr.splice(arr.indexOf(a[0][0]), 1);
      arr.splice(arr.indexOf(a[0][1]), 1);
      counter += 1;
    }
  }
  for (let i = 0; i < half; i += 1) {
    checkPassengers();
  }
  return counter + arr.length;
}

console.log(findKayakAmount([74, 60, 74, 60, 74, 60, 74, 60], 135));
console.log(findKayakAmount([50, 74, 60, 82], 135));
console.log(findKayakAmount([50, 120, 74, 60, 100, 82], 135));
