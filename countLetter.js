const str = "_nnnnnnn_n__n______nn__nn_nnn";
const str2 = "______n___n_";
//! Solution 1
function bump(x) {
  let bumpCount = 0;

  for (let i of x) {
    if ("n".includes(i)) {
      bumpCount++;
    }
  }

  return bumpCount > 15 ? "Car Dead" : "Woohoo!";
}
console.log(bump(str));
console.log(bump(str2));

//! Solution 2
const bump2 = (x) => (x.split("n").length > 15 ? "Car Dead" : "Woohoo!");
console.log(bump2(str));
console.log(bump2(str2));
