var list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];
function askForMissingDetails(list) {
  let arr = [];
  list.map((list) => {
    for (let i in list) {
      if (list[i] === null) {
        list = { ...list, question: `Hi, could you please provide your ${i}.` };
        arr.push(list);
      }
    }
  });
  return arr;
}
console.log(askForMissingDetails(list1));
/*
function askForMissingDetails(list) {
    return list.filter(function(a){

      for(var key in a){
        if (a[key] === null){
          a['question'] = `Hi, could you please provide your ${key}.`;
          return a;
        }
      }

    });
}
 */
