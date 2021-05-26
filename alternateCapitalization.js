let str = "abcdef";

function capitalize(s) {
  let even = s
    .split("")
    .map((a, i) => (i % 2 === 0 ? a.toUpperCase() : a))
    .join("");
  let odd = s
    .split("")
    .map((a, i) => (i % 2 !== 0 ? a.toUpperCase() : a))
    .join("");

  return [even, odd];
}
console.log(capitalize(str));
console.log(capitalize("undertaker"));
console.log(capitalize("akatsuki"));
