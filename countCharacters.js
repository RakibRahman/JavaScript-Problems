let str = "hello world";
let quote = "This world shall know pain";

function count(str, letter) {
  return `Occurence of ${letter.toUpperCase()} in following sentence is: ${
    str.split(letter).length - 1
  }`;
}
console.log(count(str, "l"));
console.log(count(str, "2"));
console.log(count(quote, "s"));
