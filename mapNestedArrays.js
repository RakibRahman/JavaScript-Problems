const scores = [
  [2, 7],
  [13, 47],
  [55, 77],
];
function mapOver(arr) {
  return arr.map((inner) => {
    return inner.map((value) => {
      return value * 3;
    });
  });
}
console.log(mapOver(scores));
