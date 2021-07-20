//! write a code that repeats the letter in sequence according to its position number.
//! Ex: abcd = A-Bb-Ccc-Dddd

//? function to get repeated letter capitalized
function capitalized(letter, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    /*
if (i === 0) {
      result += letter.toUpperCase();
    } else {
      result += letter.toLowerCase();
    } */
    //! ternary operator
    i === 0
      ? (result += letter.toUpperCase())
      : (result += letter.toLowerCase());
  }
  return result;
}
function accumulate(str) {
  let output = [];
  let chars = str.split("");
  let counter = 1;
  for (let char of chars) {
    output.push(capitalized(char, counter));
    counter++;
  }

  return output.join("-");
}
capitalized("d", 9);
console.log(accumulate("abcd"));
console.log(accumulate("pain"));


----
//ES6
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function accum(s) {
  let cap = s.charAt(0).toUpperCase() + s.slice(1);
  return s
    .split("")
    .map((z, i) => capitalize(z.repeat(i + 1)))
    .join("-");
}