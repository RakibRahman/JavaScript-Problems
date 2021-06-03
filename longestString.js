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
console.log(findLongest("long string"));

//! ES6
function findLongest2(str) {
  var x = str.split(" ");
  return Math.max(...x.map((el) => el.length));
}
console.log(findLongest2("long string longer"));
