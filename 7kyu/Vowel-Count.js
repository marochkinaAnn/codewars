// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//👌 SOLUTION
function getCount(str) {
  let arr = str.split('').filter(function(x) {
  return x === "a"||x === "e"||x === "i"||x === "o"||x === "u";
});
  return arr.length;
}

console.log(getCount('ghghgldsvavbcteehkiogf ddoannme'));
