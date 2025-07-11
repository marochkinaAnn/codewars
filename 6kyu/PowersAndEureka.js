// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.


//👌 SOLUTION
function sumDigPow(a, b) {
    let newArr=[];
  for (let i= a; i <= b; i++) {
    let digits = i.toString().split('');
     let result = 0;
    for (let j = 0; j < digits.length; j++) {
        result += Math.pow(Number(digits[j]),j+1);
    }
    if (i === result){
        newArr.push(i);
    }
  }
    return newArr;
  }

console.log(sumDigPow(1, 100));