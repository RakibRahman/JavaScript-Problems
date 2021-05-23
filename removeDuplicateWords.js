let s1 = "kill me heal me";
let s2 = "do odo dod do dod do";

//! with set
function removeDuplicates(str) {
  return [...new Set(str.split(" "))].join(" ");
}
console.log(removeDuplicates(s1));
console.log(removeDuplicates(s2));

let arr = [1, 2, 1, 2, 1, 1, 3];

//! with filter method
let res = arr.filter((value, index) => arr.indexOf(value) === index);
console.log(res);

//! with forEach method
function removeRepeatedValues(arr) {
  let ans = [];
  arr.forEach((value) => {
    if (!ans.includes(value)) {
      ans.push(value);
    }
  });
  return ans;
}
console.log(removeRepeatedValues(arr));
