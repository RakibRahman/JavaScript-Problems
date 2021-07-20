function solution(number) {
  let output = [];
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      //   output.push(i);
      sum += i;
    }
  }
  return sum;
  //   return output.reduce((acc, value) => acc + value, 0);
}

console.log(solution(10));
console.log(solution(45));
