function position(letter){
return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}
// IN ASCII table 'a' represents 97 number and z represents 122, so alphabet starts at 97 number but we need 1 instead of 97, it's easy, the only thing we need to do is to subtract '96' for each letter representation.

// with indexof
function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}