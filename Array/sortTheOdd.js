const sortArray = (array) => {
  const even = array.map((x) => (x % 2 === 0 ? x : ""));
  const odd = array.filter((elm) => elm % 2 !== 0).sort((a, b) => a - b);

  const sorted = [];
  for (let i = 0, j = 0; i < array.length; i++) {
    if (even[i] === "") {
      //replace '' with odd number
      sorted.push(odd[+j]);
      j++;
    } else {
      sorted.push(even[i]);
    }
  }
  return sorted;
};
console.log(sortArray([5, 8, 6, 3, 4]));

//! short solution
function sortArray2(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => b - a);
  return array.map((x) => (x % 2 ? odd.pop() : x));
}
console.log(sortArray2([5, 8, 6, 3, 4]));
