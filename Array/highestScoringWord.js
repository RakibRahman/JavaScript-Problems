const sen = "hello  world";

function high(x) {
  const alphaList = x.split(" ");
  const getScore = (word) =>
    word.split("").reduce((acc, word) => acc + word.charCodeAt(0) - 96, 0);
  const scoreList = alphaList.map((word) => getScore(word));

  return alphaList[scoreList.indexOf(Math.max(...scoreList))];
}
console.log(high(sen));
console.log(high("a v"));
console.log(high("man i need a taxi up to hill"));


//short solution 
function high2(s){
  let as = s.split(' ').map(s => [...s].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
  );
  return s.split(' ')[as.indexOf(Math.max(...as))];
}