// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Note
// If there is nothing to sum, the sum is default to 0.

//👌 SOLUTION
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>0) {
        sum= arr[i]+sum;
    } else {
        sum +=0
    }
  }
  return sum
}


console.log(positiveSum([-1, -4, -7,12]));
