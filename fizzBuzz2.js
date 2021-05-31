function solution(number) {
  let three = [];
  let five = [];
  let threeFive = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      three.push(i);
    }
    if (i % 5 == 0 && i % 3 != 0) {
      five.push(i);
    }
    if (i % 15 == 0) {
      threeFive.push(i);
    }
  }
  console.log(three);
  console.log(five);
  return [three.length, five.length, threeFive.length];
}
console.log(solution(20));
// console.log(solution(2));
// console.log(solution(14));
// console.log(solution(30));
// console.log(solution(141));
