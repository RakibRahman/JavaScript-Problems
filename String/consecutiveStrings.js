const consecutiveString = (arr, k) => {
  const n = arr.length;
  if (n === 0 || k > n || k <= 0) return "";
  let longStr = "";
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr = arr.slice(i, i + k);
    if (newStr.join("").length > longStr.length) {
      longStr = newStr.join("");
    }
  }
  return longStr;
};
const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const arr2 = ["zone", "abigail", "theta", "form", "libe", "zas"];

console.log(consecutiveString(strarr, 2));
console.log(consecutiveString(arr2, 2));
console.log(
  consecutiveString(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
);
