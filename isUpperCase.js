//OOP
String.prototype.isUpperCase = function () {
  return this.valueOf().toUpperCase() === this.valueOf();
};
const rank = new String("whow are you");
const rank2 = new String("WHO ARE YOU");
const rank3 = new String("WHo ARE YoU");

console.log(rank.isUpperCase());
console.log(rank2.isUpperCase());
console.log(rank3.isUpperCase());
console.log("PAIN".isUpperCase());

// short solution
const isUpperCase2 = (string) => /^[A-Z]*$/.test(string);
console.log(isUpperCase2("C"));
console.log(isUpperCase2("d"));
