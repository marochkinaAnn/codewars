// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

function squareSum(numbers){
    let results = 0;
for (let i = 0; i < numbers.length; i++) {
     let square =  Math.pow(numbers[i], 2);
     results += square;
}
return results;
}
console.log(squareSum([1, 2, 2]));
