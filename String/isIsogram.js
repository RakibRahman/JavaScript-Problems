function isIsogram(str) {
  const uniqueChars = new Set(str.toLowerCase().split(""));

  return uniqueChars.size === str.length ? true : false;
}