const arr = ["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"];
const arr2 = ["abracadabra", "allottee", "assessee"];
function dup(s) {
  return s.map((x) => x.replace(/(.)\1+/g, "$1"));
}
console.log(dup(arr));

const removeConsecutiveDuplicates = (arr) => {
  return arr.map((word) => {
    return word
      .split("")
      .filter((char, index, array) => {
        return char !== array[index - 1];
      })
      .join("");
  });
};
console.log(removeConsecutiveDuplicates(arr2));
