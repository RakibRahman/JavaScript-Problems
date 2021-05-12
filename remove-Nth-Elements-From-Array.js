const arr = [1, "remove", 3, "remove", 5, "remove", 7, "remove", 9, "remove"];
const arr2 = ["Hello", "Goodbye", "Hello Again"];
function removeEveryOther(arr) {
  let i = arr.length;

  while (i--) {
    (i + 1) % 2 === 0 && arr.splice(i, 1); // % 2,%3 is the position for Removing Elements
  }

  return arr;
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther(arr2));
console.log(removeEveryOther(arr));
