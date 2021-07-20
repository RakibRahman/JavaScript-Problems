function sumArray(array) {
  if (array === null || array.length < 1 || array.length === 1) return 0;
  let res = array.sort((a, b) => b - a);
  res.shift();
  res.pop();
  //res.slice(1,-1)
  let out = res.reduce((a, b) => a + b, 0);
  return out;
}
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 5, 6, 9]));
console.log(sumArray([]));
