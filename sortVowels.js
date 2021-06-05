let str = "Codewars";
let str2 = "Rnd Te5T";
function sortVowels(s) {
  if (typeof s === "number" || typeof s === null || typeof s === undefined)
    return "";

  const vowels = "aeiou";
  let result = "";
  for (let i of s) {
    if (vowels.includes(i)) {
      i = "|" + i + "\n";
    } else {
      i = i + "|" + "\n";
    }
    result += i;
  }
  return result;
}
//https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript
console.log(sortVowels(str));
console.log(sortVowels(str2));
