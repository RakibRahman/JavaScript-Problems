function rank(card) {
  let hasNumber = new RegExp(/\d/);
  if (hasNumber.test(card)) {
    if (parseInt(card[0]) === 1) {
      return 0;
    }
    return parseInt(card[0]);
  }
  return card[0] === "T"
    ? 10
    : card[0] === "J"
    ? 11
    : card[0] === "Q"
    ? 12
    : card[0] === "K"
    ? 13
    : card[0] === "A"
    ? 14
    : 0;
}
console.log(rank("6h"));
console.log(rank("1h"));
console.log(rank("Ad"));
console.log("----");
//! short Solution

function rank2(card) {
  return (
    [
      "",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K",
      "A",
    ].indexOf(card[0]) + 1
  );
}
console.log(rank2("6h"));
console.log(rank2("1h"));
console.log(rank2("Ad"));
