var list1 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

function getAverageAge(list) {
  let total = [];
  list.forEach((x) => {
    total.push(x.age);
  });
  let avg = total.reduce((acc, x) => acc + x, 0);
  return Math.round(avg / total.length);
}
console.log(getAverageAge(list1));

//! short solution

let res = list1.reduce((sum, obj) => sum + obj.age, 0) / list1.length;
console.log(res);
