function addDigits(num) {
  if (num < 10) return num;
  return (num % 10) + addDigits(Math.floor(num / 10));
}
console.log(addDigits(1236));
console.log(addDigits(324));

//! 123 % 10 gives you last digit
//! Math.floor(num / 10) gives you first two digits
