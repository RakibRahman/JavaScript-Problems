let str = "is2 Thi1s T4est 3a";
let str2 = "Fo1r the2 g3ood 4of th5e pe6ople";
function order(words) {
  const regex = /[\d]/;
  return (words.length = 0
    ? ""
    : words
        .split(" ")
        .sort((a, b) => {
          return Number(a.match(regex)) - Number(b.match(regex));
        })
        .join(" "));
}
console.log(order(str));
console.log(order(str2));
