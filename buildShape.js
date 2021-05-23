function generateShape(integer) {
  let pattern = "";

  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      pattern += "+";
    }
    if (i < integer - 1) {
      pattern += "\n";
    }
  }
  return `${pattern}`;
}
console.log(generateShape(8));

//! short solution
function generateShape2(n) {
  return ("+".repeat(n) + "\n").repeat(n).trim();
}
console.log(generateShape2(3));
