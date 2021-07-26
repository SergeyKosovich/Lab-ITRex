function generateVolumes(arr, num) {
  const copyArr = arr.slice();
  function checkArray() {
    const accum = copyArr.map((item, index) => ({
      index1: index,
      index2: index + 1,
      sum: +(copyArr[index] + copyArr[index + 1]),
    }));
    accum.sort((a, b) => a.sum - b.sum);
    const firstLowestInd = accum[0].index1;
    const sectLowestInd = accum[0].index2;
    copyArr[firstLowestInd] += copyArr[sectLowestInd];
    copyArr.splice(sectLowestInd, 1);
  }
  while (copyArr.length !== num) {
    checkArray();
  }
  return Math.max(...copyArr);
}
console.log(generateVolumes([1, 2, 1], 2));
console.log(generateVolumes([1, 2, 1, 1], 3));
