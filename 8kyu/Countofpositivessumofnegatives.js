// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// SOLUTION
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }
    let sum = 0;
    let neg = 0;
    let results = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i]>0) {
        sum++
    } else if (input[i]<0){
        neg += input[i]
    } 
    }
    results.push(sum, neg)
    return results
}    
  
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
