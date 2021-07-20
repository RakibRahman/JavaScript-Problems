const nums = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
const nums2 = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];
const nums3 = [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2];

//! Brute force /nested for loops
function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return arr[i];
    }
  }
  return arr[i];
}
console.log(findOdd(nums));
//! With for loop & filter method
function findOdd2(A) {
  for (let i = 0; i < A.length; i++) {
    const count = A.filter((n) => n === A[i]).length;
    if (count % 2 != 0) return A[i];
  }

  return -1;
}
console.log(findOdd2(nums2));

//! with XOR Operator with reduce method
const findOdd3 = (arr) => arr.reduce((a, b) => a ^ b);
//? XOR operator give us odd occurrence of all elements
console.log(findOdd3(nums3));

//! with XOR Operator with for loop

function findOddOccurrence(array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res = res ^ array[i];
  }
  return res;
}
console.log(findOddOccurrence(nums));
