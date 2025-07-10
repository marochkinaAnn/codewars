// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


//👌 SOLUTION
function rowSumOddNumbers(n) {
    let countBefore = 0;
  for (let i = 0; i < n; i++) {
          countBefore += i
      }
      let st = (countBefore*2)+1;
    let arr= [st];
    for (let i = 1; i <= n-1; i++) {
        st = st+2;
        arr.push(st); 
    }
   return arr.reduce((acc, cur)=> acc + cur, 0);
}

console.log(rowSumOddNumbers(2));