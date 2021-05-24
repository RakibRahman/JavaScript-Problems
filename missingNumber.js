//with reduce method
const arr = [2, 5, 3, 1, 4, 7, 10, 15];
const nums = [1, 10];

const findMissingNumbers = (arr) => {
  //! Create sparse array with a 1 at each index equal to a value in the input.
  let sparse = arr.reduce((sparse, index) => ((sparse[index] = 1), sparse), []);
  //? Create array 0..highest number, and retain only those values for which the sparse array has nothing at that index (and eliminate the 0 value).
  return [...sparse.keys()].filter((num) => num && !sparse[num]);
};
console.log(findMissingNumbers(arr));
console.log(findMissingNumbers(nums));

console.log("-----");
//? with indexOf()

const missingNumbers = (arr) => {
  let missing = new Array();
  let count = Math.max(...arr);
  for (var i = 1; i <= count; i++) {
    if (arr.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  return missing;
};
console.log(missingNumbers(nums));
