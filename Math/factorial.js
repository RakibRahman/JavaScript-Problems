function factorial(n) {
  if (n > 12 || n < 0) throw new Error("RangeError");
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

//recursion
function getFactorial(n) {
  if (n > 12 || n < 0) throw new Error("RangeError");
  return n <= 1 ? 1 : n * getFactorial(n - 1);
}
console.log(getFactorial(7));
