const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sum(nums));

//! short solution
//? equation : n (n + 1) / 2
const addition = (arr) => (arr.length * (arr.length + 1)) / 2;
console.log(addition(nums));
