// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//👌 SOLUTION
function longest(s1, s2) {
    let str= s1+s2;
    let arr = str.split('');
  let mySet = new Set(arr);
  return [...mySet].sort().join('');
}
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a,b));
