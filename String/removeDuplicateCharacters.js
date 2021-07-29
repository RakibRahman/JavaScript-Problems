let str = "1121255";
let word = "amazing";
const removeDuplicateCharacters = (string) => {
  return Array.from(new Set(string.split(""))).join("");
};
console.log(removeDuplicateCharacters(str));
console.log(removeDuplicateCharacters(word));

const removeDuplicateCharacters2 = (string) => {
  return string
    .split("")
    .filter((char, index, str) => str.indexOf(char) === index)
    .join("");
};
console.log(removeDuplicateCharacters2(str));
var abc = "aaabbbccccabbbbcccccc";
console.log(str.replace(/(.)(?=.*\1)/g, "")); // "abc"
