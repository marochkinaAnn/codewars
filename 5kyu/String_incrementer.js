// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//👌 SOLUTION

function incrementString (strng) {
  let arr = strng.split('');
  let i = 0;
  let num = arr.length-1;
  let result =[];

  while (true) {
    if ( !isNaN(arr[num])) {
        i++
        result.push(arr[num])
        num--      
    } else {
        let len = result.length; 
       result = String(Number(result.reverse().join(''))+1).padStart(len, '0');
       arr.splice(arr.length-i,i);
       return arr.join('')+result
    }
  }
  }

console.log(incrementString ("foobar999"));
console.log(incrementString ("foo"));