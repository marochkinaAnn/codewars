// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

//👌 SOLUTION
function expandedForm(num) {
   let str = num.toString();
   let results =[];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
    let x = Number(str[i]) * Math.pow(10, str.length - 1 - i);
    results.push(x);
  } else continue
  }
    return results.join('+')
   }
  
console.log(expandedForm(332));

