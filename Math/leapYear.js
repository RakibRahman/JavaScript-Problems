function isLeapYear(year) {
  return year % 400 === 0
    ? true
    : year % 100 === 0
    ? false
    : year % 4 === 0
    ? true
    : false;
}
console.log(isLeapYear(1984));
console.log(isLeapYear(2010));
console.log(isLeapYear(1000));
