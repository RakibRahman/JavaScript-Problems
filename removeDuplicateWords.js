let s1 = "kill me heal me";
let s2 = "do odo dod do dod do";

function removeDuplicates(str) {
  return [...new Set(str.split(" "))].join(" ");
}
console.log(removeDuplicates(s1));
console.log(removeDuplicates(s2));
