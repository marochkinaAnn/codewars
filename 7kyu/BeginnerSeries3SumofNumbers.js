// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

//👌 SOLUTION
// function getSum(a, b){
//      let result = 0
//     if(a<b){
//    let i = a ;
//    while (i <= b) {
//       result += i++;
//    }
// }else if (b<a) {
//     let i = b ;
//    while (i <= a) {  
//      result += i++;
// }
// }else {
//     result = a;
// }
//     return result;
//    }

console.log(getSum(-1, 2));

//👌 SOLUTION_2
function getSum(a, b){
    let result = 0;
let max = Math.max(a,b);
let min = Math.min(a,b);
for (let i = min; i <= max; i++) {
    result += i  
}
    return result;
   }

