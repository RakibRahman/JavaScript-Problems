//! with for of loop
let arr = ["3:1", "2:2"];
let arr2 = ["1:0", "2:0", "3:0", "4:0", "2:1"];

/*
Points:

x > y: 3 points
x = y: 1 point
x < y: 0 point

*/

function calculateAmountOfPoints(games) {
  totalPoints = 0;
  for (const game of games) {
    const [scoreX, scoreY] = game.split(":"); // split the game score for both teams and assign it to two variables
    const points = scoreX > scoreY ? 3 : scoreX === scoreY ? 1 : 0;
    totalPoints += points;
  }
  return totalPoints;
}
console.log(calculateAmountOfPoints(arr));
console.log(calculateAmountOfPoints(arr2));

console.log("------");

//! with reduce method (it iterates over each element)
function points(games) {
  return games.reduce((output, value) => {
    let x = value[0];
    //? value[1] is ":"
    let y = value[2];
    return (output += x > y ? 3 : x === y ? 1 : 0);
  }, 0);
}

console.log(points(arr));
console.log(points(arr2));

console.log("------");

//! with map method(it iterates over each element)
function points2(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
console.log(points2(arr));
console.log(points2(arr2));
