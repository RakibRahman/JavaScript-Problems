let arr = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
let arr2 = [12, 51, -159.8, -3.14, 247, -6];

function averageSquaredInt(arr) {
  if (arr.every((v) => v % 2 || v < 0)) return 0;
  let evenSqr = arr
    .filter((x) => x % 2 === 0 && x > 0)
    .map((y) => Math.pow(y, 2));

  let sum = evenSqr.reduce((a, b) => a + b, 0);
  if (!evenSqr < 0) return counter;
  return Math.round(sum / evenSqr.length);
}
console.log(averageSquaredInt(arr));
console.log(averageSquaredInt(arr2));
console.log(averageSquaredInt([3, 9, 7]));
