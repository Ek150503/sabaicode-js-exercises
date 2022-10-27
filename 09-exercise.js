const numberSplit = (num) => {
    let num1;
    let num2;
    
    num1 = Math.floor(num / 2)
    num2 = Math.ceil(num / 2)

    return [num1, num2]
}

console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))


