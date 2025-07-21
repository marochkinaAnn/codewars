// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//👌 SOLUTION
function between(a, b) {

// вариант1

//     let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;

// вариант 2

return Array.from({ length: b - a + 1}, (_,i) => i+a )
}
console.log( between(1, 4));

