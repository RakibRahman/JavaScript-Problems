let str = "45385593107843568";

function fakeBin(x) {
  return x
    .split("")
    .map((num) => (num > 4 ? 1 : 0))
    .join("");
}
console.log(fakeBin(str));

//! with regex
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}
