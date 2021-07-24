function copy(pages, xerox1, xerox2) {
  let pagesCounter = pages;
  const fastestXerox = Math.min(xerox1, xerox2);
  const slowestXerox = Math.max(xerox1, xerox2);
  const timeCycle = [];
  let counter = 0;
  const difference = slowestXerox - Math.floor(slowestXerox / fastestXerox) * fastestXerox;
  for (let i = 0; i < Math.floor(slowestXerox / fastestXerox); i += 1) {
    timeCycle.push(fastestXerox);
  }
  timeCycle.push(slowestXerox);
  // Прогоняем первую копию
  pagesCounter -= 1;
  counter += timeCycle[0];
  // Идем по порядку по timecycle пока не закончатся страницы
  while (pagesCounter !== 0) {
    for (let i = 0; i < timeCycle.length; i += 1) {
      pagesCounter -= 1;
      if (i === timeCycle.length - 1) {
        if (pagesCounter === 0) {
          counter += difference;
        }
      } else {
        counter += timeCycle[i];
      }
      if (pagesCounter === 0) {
        break;
      }
    }
  }
  //
  return counter;
}

console.log(copy(4, 1, 1));
console.log(copy(5, 1, 2));
