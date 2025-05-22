// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// SOLUTION

function doubleChar(str) {
 let arr = str.split('');
 for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].repeat(2)
 }
 return arr.join('')
}

console.log(doubleChar('String'));
