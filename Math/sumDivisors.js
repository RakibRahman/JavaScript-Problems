function sumDivisors(num) {
  let sum = 0;
  const divisors = [];
  for (let i = 1; i < num; i++) {
    if (!(num % i)) {
      sum += i;
      divisors.push(i);
    }
  }
  console.log("Total: " + sum);
  return divisors;
}
console.log(sumDivisors(50));
console.log(sumDivisors(23));
