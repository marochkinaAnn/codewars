// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]



//👌 SOLUTION
function towerBuilder(nFloors) {
    let result =[];
     let n= 1;
     let spaces = nFloors - 1; 
  for (let i = 0; i < nFloors; i++) {
    result.push(" ".repeat(spaces) + "*".repeat(n) + " ".repeat(spaces))
         n = n + 2;
         spaces = spaces -1;
  }
  return result
}
console.log(towerBuilder(9));
