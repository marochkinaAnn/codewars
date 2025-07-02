// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

//👌 SOLUTION
function high(x){
let arr = x.split(' ');
    let maxsum = 0;
    let maxword = '';
for (let i = 0; i < arr.length; i++) {
    let tarr= arr[i].split('');
    let sum = 0;
    for (let j = 0; j < tarr.length; j++) {
    sum += tarr[j].charCodeAt(0)-96;
}
if (sum>maxsum) {
    maxsum=sum;
    maxword=arr[i];
}
}
 return maxword;
}
console.log(high('abad dcfgh ffgg'));
