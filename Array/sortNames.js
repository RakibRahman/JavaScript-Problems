let arr = [
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
  {
    name: "Rakib",
    points: 320,
  },
];
let result = arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(result);
