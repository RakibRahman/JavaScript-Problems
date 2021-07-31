const arr = [0, 1, 0, 3];

function getSumPairZero(arr) {
  for (let number of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (number + arr[j] === 0) {
        return [number, arr[j]];
      }
    }
  }
}
console.log(getSumPairZero(arr));

const arr2 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function getSumPair(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(getSumPair(arr2));
console.log(getSumPair(arr));
