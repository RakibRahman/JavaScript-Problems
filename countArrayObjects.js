let names = ["Rakib", "Rakib", "Labib", "Ohi", "Pain", "Pain", "Pain"];

function countNames(list) {
  let countedNames = list.reduce((allLanguages, name) => {
    if (name in allLanguages) {
      allLanguages[name]++;
    } else {
      allLanguages[name] = 1;
    }
    return allLanguages;
  }, {});
  return countedNames;
}
console.log(countNames(names));
let list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];
function countLanguages(list) {
  return list.reduce((languages, { language }) => {
    if (languages.hasOwnProperty(language)) {
      languages[language]++;
    } else {
      languages[language] = 1;
    }
    return languages;
  }, {});
}
/*
!Short Solution
 list.reduce((languages, { language }) => ((languages[language] = (languages[language] || 0) + 1), languages), {})
*/
console.log(countLanguages(list1));

//With forEach Method
function countLanguages2(list) {
  var count = {};
  list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
  return count;
}
console.log(countLanguages2(list1));
