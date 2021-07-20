let str = "1 2 3 4 542 -9";

function highAndLow(numbers) {
  let out = [];
  for (let i of numbers.split(" ")) {
    out.push(i);
  }
  return `${Math.max(...out)} ${Math.min(...out)}`;
}
console.log(highAndLow(str));

//clean version
function highAndLow2(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
console.log(highAndLow2(str));
