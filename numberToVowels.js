let arr = [
  118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120,
  106,
];
let arr2 = [101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103];
let arr3 = [108, 119, 121, 121, 101, 99, 101, 114, 122, 97];
let vowels = [97, 101, 105, 111, 117];

const isVow = (a) =>
  a.map((charCode) =>
    /[aeiou]/.test(String.fromCharCode(charCode))
      ? String.fromCharCode(charCode)
      : charCode
  );
console.log(isVow(arr));
console.log(isVow(arr2));
console.log(isVow(arr3));

//! ternary operator
function convert(a) {
  return a.map((x) => {
    if (x === 97) {
      return (a[x] = "a");
    } else if (x === 101) {
      return (a[x] = "e");
    } else if (x === 105) {
      return (a[x] = "i");
    } else if (x === 111) {
      return (a[x] = "o");
    } else if (x === 117) {
      return (a[x] = "u");
    } else {
      return (a[x] = x);
    }
  });
}

console.log(isVow(arr3));
console.log(convert(vowels));
