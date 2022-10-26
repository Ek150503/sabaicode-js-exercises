const filterArray = (arr) => {
    return arr.filter((value) => typeof value === "number" && value >= 0)
}


console.log(filterArray([1,2,"a", "b"]))
console.log(filterArray([1,"a","b",0 , 15]))
console.log(filterArray([1,2,"aasf","1", "123", 123]))