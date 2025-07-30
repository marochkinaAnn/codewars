// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


//👌 SOLUTION
function getMiddle(s) {
  let len = s.length;
  if (len % 2 === 0){
    let x = len/2
    return s[x-1]+s[x]
  } else {
    let y = Math.floor(len/2)
    return s[y]
  }
}
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
