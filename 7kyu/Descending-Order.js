// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

//👌 SOLUTION

function descendingOrder(n){
    let arr= String(n).split('').map(Number);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]<arr[j+1]){
            let temp =arr[j]
            arr[j]=arr[j+1]
            arr[j+1]= temp
        }
    }
  }
  return  Number(arr.join(''));
}

console.log(descendingOrder(584793125466258));
