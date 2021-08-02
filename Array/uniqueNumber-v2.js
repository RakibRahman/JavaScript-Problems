const array = [1, 1, 1, 2, 1, 1];
const array2 = [0, 0, 0.55, 0, 0];

function findUniq(arr) {
  arr.sort();

  if (arr[0] == arr[1]) {
    return arr[arr.length - 1];
  }
  return arr[0];
}
console.log(findUniq(array));

function findUniq2(arr) {
  return +arr.filter((value) => arr.indexOf(value) == arr.lastIndexOf(value));
}
console.log(findUniq2(array2));
