let res = ["Hello", "there", "I'm", "fine"];
let arr = ["C", "d", "a", "B"];

const sortme = function (names) {
  return names.sort((a, b) => {
    let A = a.toUpperCase(); //ignore Upper and Lower Case
    let B = b.toUpperCase();
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }

    return 0;
  });
};
console.log(sortme(res));
console.log(sortme(arr));
/*
sortme = function( names ){
  return names.sort(function(first, second) {
    return first.toLowerCase().localeCompare(second.toLowerCase())
  })
}
*/
