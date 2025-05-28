// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// 👌 SOLUTION
function XO(str) {
    str= str.toLowerCase()
    let arr= str.split('')
    let arr1 = arr.filter((el)=>el=="x")
    let arr2 = arr.filter((el)=>el=="o")
    if(arr1.length === arr2.length){
        return true
    } else{
        return false
    }
}


console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));