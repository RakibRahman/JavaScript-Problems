function highAndLow(numbers) {
  let out = [];
  for (let i of numbers.split(" ")) {
    out.push(i);
  }
  return `${Math.max(...out)} ${Math.min(...out)}`;
}
console.log(highAndLow(str));
