function copy(pages, xerox1, xerox2) {
  const [fastestXerox, slowestXerox] = [xerox1, xerox2].sort((a, b) => a - b);
  const timeCycle = new Array(Math.floor(slowestXerox / fastestXerox)).fill(fastestXerox);
  const difference = slowestXerox - Math.floor(slowestXerox / fastestXerox) * fastestXerox;
  timeCycle.push(slowestXerox);
  // Прогоняем первую копию
  let pagesCounter = pages - 1;
  let counter = timeCycle[0];
  // Идем по порядку по timecycle пока не закончатся страницы
  while (pagesCounter !== 0) {
    for (let i = 0; i < timeCycle.length; i += 1) {
      if (!pagesCounter) {
        break;
      }
      pagesCounter -= 1;
      if (i === timeCycle.length - 1 && pagesCounter === 0) {
        counter += difference;
      } else if (i !== timeCycle.length - 1) {
        counter += timeCycle[i];
      }
    }
  }
  return counter;
}
console.log(copy(4, 1, 1));
console.log(copy(5, 1, 2));
