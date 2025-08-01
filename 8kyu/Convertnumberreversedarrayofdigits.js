// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

//👌 SOLUTION
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}

console.log(digitize(35231));
