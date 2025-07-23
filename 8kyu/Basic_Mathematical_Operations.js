// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output

//👌 SOLUTION
function basicOp(operation, value1, value2){
  switch (operation) {
    case '+':
        return value1+value2;
    case '-': 
        return value1-value2;
    case '/': 
        return value1/value2;
    case '*': 
        return value1*value2;
    default:
        break;
  }
}
console.log(basicOp('+', 4, 7));
