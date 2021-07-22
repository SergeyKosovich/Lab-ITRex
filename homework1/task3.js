function crasher(a) {
  // eslint-disable-next-line no-param-reassign
  delete a.bla;
}
const a = {
  bla: 'bla',
};
Object.seal(a);
crasher(a);
console.log(a);
