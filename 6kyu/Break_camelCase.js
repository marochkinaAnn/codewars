// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


//👌 SOLUTION
function solution(string) {
    let arr = string.split('');
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===arr[i].toUpperCase() && /[A-Z]/.test(arr[i])) {
        newArr.push(' ')
        newArr.push(arr[i])
    }else{
        newArr.push(arr[i])
    }
  }
  return newArr.join('')
}


// function solution(string){
//   return string.replace(/[A-Z]/g, function(c){return " " + c;});
// }


console.log(solution("camelCasingTest"));
