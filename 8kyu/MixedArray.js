// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// SOLUTION
function sumMix(x){
let arr = x.map(Number);
let sum=0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
return sum
}
console.log(sumMix([9, 3, '7', '3']));
