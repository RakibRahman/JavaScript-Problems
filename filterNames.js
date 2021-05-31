let arr = [
  ["foo", "foo@foo.com"],
  ["bar_", "bar@bar.com"],
];
let arr2 = [
  ["rakib_", "md.rr@gmail.com"],
  ["zero", "zero"],
  ["zakir_", "planetzakir"],
];
function searchNames(logins) {
  return logins.filter((x, i) => {
    if (logins[i][0].slice(-1) === "_") {
      return x;
    }
  });
  //  return logins.filter(function (login) { return login[0].slice(-1) === '_' });
  // return logins.filter(a=>a[0].endsWith('_'));
}

console.log(searchNames(arr));
console.log(searchNames(arr2));
