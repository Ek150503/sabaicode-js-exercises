const check = (arr,item) =>{
    // if(arr.includes(item)) return true;
    // else return false;

    return arr.includes(item);
}

console.log(check([1,2,3,4,5,6], 6));
console.log(check([1,2,3,4,5,6], 7));