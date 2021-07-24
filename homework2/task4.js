function genMagicSquare(length) {
  if (length === 2) {
    return 'Impossible';
  }
  const firstarr = [];
  for (let i = 1; i <= length ** 2; i += 1) {
    firstarr.push(i);
  }
  const arr = [];
  for (let i = 1; i <= length; i += 1) {
    const miniArr = [];
    for (let i2 = 1; i2 <= length; i2 += 1) {
      miniArr.push('X');
    }
    arr.push(miniArr);
  }
  let lastIndex = 0;
  let lastPos = Math.floor(length / 2);
  function sortArr() {
    function checkTop() {
      if (arr[lastIndex - 1]) {
        return true;
      }
      return false;
    }
    function checkRight() {
      if (arr[lastIndex][lastPos + 1]) {
        return true;
      }
      return false;
    }
    const stayedLength = firstarr.length - 1;
    arr[0][lastPos] = firstarr.shift();
    for (let i = 0; i < stayedLength; i += 1) {
      if (checkTop()) {
        if (checkRight()) {
          if (arr[lastIndex - 1][lastPos + 1] === 'X') {
            arr[lastIndex - 1][lastPos + 1] = firstarr.shift();
            lastIndex -= 1;
            lastPos += 1;
          } else {
            arr[lastIndex + 1][lastPos] = firstarr.shift();
            lastIndex += 1;
          }
        } else if (arr[lastIndex - 1][0] === 'X') {
          arr[lastIndex - 1][0] = firstarr.shift();
          lastIndex -= 1;
          lastPos = 0;
        } else {
          arr[lastIndex + 1][lastPos] = firstarr.shift();
          lastIndex += 1;
        }
      } else if (checkRight()) {
        if (arr[length - 1][lastPos + 1] === 'X') {
          arr[length - 1][lastPos + 1] = firstarr.shift();
          lastIndex = length - 1;
          lastPos += 1;
        } else {
          arr[lastIndex + 1][lastPos] = firstarr.shift();
          lastIndex += 1;
        }
      } else if (arr[length - 1][0] === 'X') {
        arr[length - 1][0] = firstarr.shift();
        lastIndex = length - 1;
        lastPos = 0;
      } else {
        arr[lastIndex + 1][lastPos] = firstarr.shift();
        lastIndex += 1;
      }
    }
  }

  if (length % 2 !== 0) {
    sortArr();
  }
  if (length % 4 === 0) {
    const side = length / 4;
    let sideA;
    let sideB;
    let sideC;

    for (let i = 0; i < side; i += 1) {
      for (let i2 = 0; i2 < side; i2 += 1) {
        arr[i][i2] = 'C';

        sideA = { top: i + 1, left: i2 + 1 };

        arr[i][length - 1 - i2] = 'C';

        sideB = { top: i + 1, left: length - 1 - i2 - 1 };

        arr[length - 1 - i][length - 1 - i2] = 'C';
        sideC = {
          top: length - 1 - i - 1,
          left: length - 1 - i2 - 1,
        };

        arr[length - 1 - i][i2] = 'C';
      }
    }
    for (let i = sideA.top; i <= sideC.top; i += 1) {
      for (let i2 = sideA.left; i2 <= sideB.left; i2 += 1) {
        arr[i][i2] = 'M';
      }
    }
    let counter2 = 0;
    for (let i = 0; i < length; i += 1) {
      for (let i2 = 0; i2 < length; i2 += 1) {
        if (arr[i][i2] === 'C' || arr[i][i2] === 'M') {
          arr[i][i2] = firstarr[counter2];
          firstarr[counter2] = undefined;
        }
        counter2 += 1;
      }
    }
    const sortedArray = [];
    firstarr.forEach((item) => {
      if (item) {
        sortedArray.push(item);
      }
    });
    for (let i = 0; i < length; i += 1) {
      for (let i2 = 0; i2 < length; i2 += 1) {
        if (arr[i][i2] === 'X') {
          arr[i][i2] = sortedArray.pop();
        }
      }
    }
  }
  function arrJoin(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  function checkEven() {
    const side = length / 2;
    const arrayA = [];
    const arrayB = [];
    const arrayC = [];
    const arrayD = [];
    function createArray(name, array) {
      for (let i = 0; i < length / 2; i += 1) {
        array.push([]);
        for (let i2 = 0; i2 < length / 2; i2 += 1) {
          array[i].push(name);
        }
      }
    }
    createArray('A', arrayA);
    createArray('B', arrayB);
    createArray('C', arrayC);
    createArray('D', arrayD);
    const arrayForA = [];
    const arrayForB = [];
    const arrayForC = [];
    const arrayForD = [];
    const Part = firstarr.length / 4;
    for (let i = 2; i <= Part; i += 1) {
      arrayForA.push(i);
    }
    for (let i = Part + 2; i <= Part * 2; i += 1) {
      arrayForB.push(i);
    }
    for (let i = Part * 2 + 2; i <= Part * 3; i += 1) {
      arrayForC.push(i);
    }
    for (let i = Part * 3 + 2; i <= Part * 4; i += 1) {
      arrayForD.push(i);
    }
    arrayA[0][Math.floor(side / 2)] = 1;
    arrayB[0][Math.floor(side / 2)] = firstarr.length / 4 + 1;
    arrayC[0][Math.floor(side / 2)] = (firstarr.length / 4) * 2 + 1;
    arrayD[0][Math.floor(side / 2)] = (firstarr.length / 4) * 3 + 1;
    lastIndex = 0;
    lastPos = Math.floor(side / 2);
    function checkTopInPart(arrg) {
      if (arrg[lastIndex - 1]) {
        return true;
      }
      return false;
    }
    function checkRightInPart(arrg) {
      if (arrg[lastIndex][lastPos + 1]) {
        return true;
      }
      return false;
    }
    const arrForLength = arrayForA.length - 1;
    function sortParts(array, arrFor, letter) {
      const Arr = array.slice();
      for (let i = 0; i <= arrForLength; i += 1) {
        if (checkTopInPart(Arr)) {
          if (checkRightInPart(Arr)) {
            if (Arr[lastIndex - 1][lastPos + 1] === letter) {
              Arr[lastIndex - 1][lastPos + 1] = arrFor.shift();
              lastIndex -= 1;
              lastPos += 1;
            } else {
              Arr[lastIndex + 1][lastPos] = arrFor.shift();
              lastIndex += 1;
            }
          } else if (Arr[lastIndex - 1][0] === letter) {
            Arr[lastIndex - 1][0] = arrFor.shift();
            lastIndex -= 1;
            lastPos = 0;
          } else {
            Arr[lastIndex + 1][lastPos] = arrFor.shift();
            lastIndex += 1;
          }
        } else if (checkRightInPart(arr)) {
          if (Arr[side - 1][lastPos + 1] === letter) {
            Arr[side - 1][lastPos + 1] = arrFor.shift();
            lastIndex = side - 1;
            lastPos += 1;
          } else {
            Arr[lastIndex + 1][lastPos] = arrFor.shift();
            lastIndex += 1;
          }
        } else if (Arr[side - 1][0] === letter) {
          Arr[side - 1][0] = arrFor.shift();
          lastIndex = side - 1;
          lastPos = 0;
        } else {
          Arr[lastIndex + 1][lastPos] = arrFor.shift();
          lastIndex += 1;
        }
      }
      lastIndex = 0;
      lastPos = Math.floor(side / 2);
    }
    sortParts(arrayA, arrayForA, 'A');
    sortParts(arrayB, arrayForB, 'B');
    sortParts(arrayC, arrayForC, 'C');
    sortParts(arrayD, arrayForD, 'D');
    const mediana = Math.floor(side / 2);
    for (let i = 0; i < mediana; i += 1) {
      for (let i2 = 0; i2 < mediana; i2 += 1) {
        const toA = arrayD[i][i2];
        const toD = arrayA[i][i2];
        arrayA[i][i2] = toA;
        arrayD[i][i2] = toD;
      }
    }
    for (let i = mediana; i < mediana + 1; i += 1) {
      for (let i2 = 1; i2 <= mediana; i2 += 1) {
        const toA = arrayD[i][i2];
        const toD = arrayA[i][i2];
        arrayA[i][i2] = toA;
        arrayD[i][i2] = toD;
      }
    }
    for (let i = mediana + 1; i < side; i += 1) {
      for (let i2 = 0; i2 < mediana; i2 += 1) {
        const toA = arrayD[i][i2];
        const toD = arrayA[i][i2];
        arrayA[i][i2] = toA;
        arrayD[i][i2] = toD;
      }
    }
    const miniArr = arrJoin(arrayA, arrayD);
    const miniArr2 = arrJoin(arrayC, arrayB);
    miniArr2.forEach((item, index) => {
      item.forEach((item2) => miniArr[index].push(item2));
    });
    return miniArr;
  }
  if (length % 2 === 0 && length % 4 !== 0) {
    return checkEven();
  }

  return arr;
}
console.log(genMagicSquare(3));
