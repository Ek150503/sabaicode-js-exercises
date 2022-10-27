const arrayOperation = (x,y,z) =>{
    let arr = [];

    for(let i = x; i<= y; i++){
        if(i % z === 0){
            arr.push(i);
        }
    }

    return arr;
}

console.log(arrayOperation(1,10,3))
console.log(arrayOperation(7,9,2))
console.log(arrayOperation(15,20,7))