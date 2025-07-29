// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// 👌 SOLUTION

function accum(s) {
	
    
//     вариант 1
    return s
    .split('')
    .map((n ,i) => n.toUpperCase()+ n.toLowerCase().repeat(i))
    .join('-');
}
//         вариант 2
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//     let x = arr[i].toUpperCase()+ arr[i].toLowerCase().repeat(i)
//         result.push(x)
//     }
// return result.join('-')
// }

 


console.log(accum("ZpglnRxqenU"));
