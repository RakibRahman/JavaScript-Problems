function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0;

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}
// console.log(findLongest("long string"));

//! ES6
function findLongest2(str) {
  var x = str.split(" ");
  return Math.max(...x.map((el) => el.length));
}
// console.log(findLongest2("long string longer"));

//get longest string
function findLongest3(str) {
  let arr = str.split(" ");
  let len = 0;
  let longest;
  for (let i in arr) {
    if (arr[i].length > len) {
      len = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}
console.log(findLongest3("killer name is akatsuki"));
console.log(findLongest("killer name is akatsuki"));

//Reduce Method

const lomba = ["rakib", "zakir", "nagato"].reduce(
  (longest, currentWord) =>
    currentWord.length > longest.length ? currentWord : longest,
  ""
);
console.log(lomba);
