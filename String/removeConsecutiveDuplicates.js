function removeDuplicates(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      word += str[i];
    }
  }
  return word;
}
console.log(removeDuplicates("helllooododdd"));
console.log(removeDuplicates("aaabbcdeeffabcd"));
