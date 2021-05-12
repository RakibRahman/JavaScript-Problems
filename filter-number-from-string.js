let string = "a2mm3";
let regex = /[a-z]/gi;

console.log(string.replace(regex, ""));

const filterString = (value) => {
  return parseInt(value.replace(/[^\d]/g, ""));
};
console.log(filterString("six6isnot7isnot8"));
