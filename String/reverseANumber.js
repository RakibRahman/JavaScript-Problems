let num = 564782;

function reverseNumber(num) {
  return num.toString().split("").reverse().join("");
}
console.log(reverseNumber(num));

//While loop
let n = 6376282;
n2 = 0;
while (n > 0) {
  n2 = n2 * 10 + (n % 10);
  n = parseInt(n / 10);
}
console.log(n2);
