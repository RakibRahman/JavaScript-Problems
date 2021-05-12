function spinWords(string) {
  const spin = string.split(" ").map((word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  });
  return spin.join(" ");
}
console.log(spinWords("This world shall know pain"));
