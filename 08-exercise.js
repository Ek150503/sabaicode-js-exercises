const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr)
    return [min , max];
}

console.log(minMax([1,2,3,4,5,6]))
console.log(minMax([1,564,3,235,12]))
console.log(minMax([564,235,12]))