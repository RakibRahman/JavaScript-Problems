//String Anagram
// 'hello' => 'lleho'
// 'cool' => 'cloo'
const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  let letterCount = {};
  for (let letter of string1) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  for (let letters of string2) {
    if (!letterCount[letters]) return false;
    letterCount[letters]--;
  }

  console.log(letterCount);
  return true;
};
console.log(isAnagram("hello", "holle"));
console.log(isAnagram("kibar", "rakib"));
console.log(isAnagram("kibaa", "rakib"));
