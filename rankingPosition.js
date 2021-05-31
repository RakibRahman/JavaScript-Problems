//! https://www.codewars.com/kata/5c784110bfe2ef660cb90369/train/javascript
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
];
let arr2 = [
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 100,
  },
  {
    name: "Mary",
    points: 100,
  },
  {
    name: "Kate",
    points: 100,
  },
];

function ranking(p) {
  p.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name)).forEach(
    (v, i) =>
      (v.position =
        !i || v.points < p[i - 1].points ? i + 1 : p[i - 1].position)
  );
  return p;
}
console.log(ranking(arr));
console.log(ranking(arr2));
