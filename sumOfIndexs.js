let arr = [10, 20, 30, 40, 50];

function sumOfIndexs(arr, i1, i2) {
  let result = null;
  arr.slice(i1, i2 + 1).forEach((value) => (result += value));
  return result;
}
console.log(sumOfIndexs(arr, 0, 2));
console.log(sumOfIndexs(arr, 0, 1));
