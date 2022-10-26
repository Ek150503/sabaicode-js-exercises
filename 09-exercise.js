const numberSplit = (num) => {
    let num1;
    let num2;
    if(num % 2 === 0){
        num1 = num2 = num / 2;
    }
    else{
        num1 = Math.floor(num / 2);
        num2 = Math.floor(num / 2) + 1;
    }

    return [num1, num2]
}

console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))