const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 4, 7, 8, 3];

// const getUniqueNumbers = (arr) => {
//   return new Set(arr).size;
// };
// console.log(getUniqueNumbers(arr));

const countUniqueNumbers = (array) => {
  array.sort((a, b) => a - b);
  if (array.length === 0) {
    throw new Error("Array is empty");
  }
  let count = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] !== array[i]) {
      count++;
      result.push(array[i]);
    }
  }
  //   return count;
  return result.length;
};
console.log(countUniqueNumbers(arr));
console.log(countUniqueNumbers([100, 25, 96, 9, 1, 2, 9]));
// console.log(countUniqueNumbers([]));
