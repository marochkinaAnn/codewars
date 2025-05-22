// Write a function that removes the spaces from the string, then return the resultant string.


// SOLUTION

function noSpace(x){
    let arr = x.split('');
    let pr = ' ';
    let newarr = arr.filter(el => el !== pr);
    return newarr.join('');
}



console.log( noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));