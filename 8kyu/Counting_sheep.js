function countSheeps (sheep) {
    let count = 0;

    for (let i = 0; i < sheep.length; i++){
    if(sheep[i]){
        count++;
             }
}
return(count);

}

console.log(countSheeps ([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));
