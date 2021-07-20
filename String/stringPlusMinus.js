function calculate(str) {
  return eval(str.replace(/plus/g, "+").replace(/minus/g, "-")).toString();
}
console.log(calculate("1plus2plus3plus4"));

function calculate2(str) {
  let result = "";

  result = str
    .split("plus")
    .join(" ")
    .split("minus")
    .join(" -")
    .split(" ")
    .reduce((a, c) => +a + +c);
  return result + "";
}
console.log(calculate2("1plus2plus3plus4minus5"));
