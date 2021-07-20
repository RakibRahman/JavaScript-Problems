//!A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.

function isPalindrome(string) {
  //   return string.split("").reverse().join("") === string;

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] != string[right]) {
      return `${false} - ${string} is not a palindrome`;
    }
    left++;
    right--;
  }
  return `${true} - ${string} is a palindrome`;
}
console.log(isPalindrome("amadam"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
