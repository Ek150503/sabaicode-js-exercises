const getOnlyEven = (arr) =>{
    return arr.filter((value, index) => value % 2 === 0 && index % 2 === 0)
}

console.log(getOnlyEven([1,3,2,6,4,8]))
console.log(getOnlyEven([0,1,2,3,4]))
console.log(getOnlyEven([1,2,3,4,5]))