const toArrayNumber = (arr) => {
    return arr.map(value => value * 1);
}

console.log(toArrayNumber(["9.4", "4.2"]))
console.log(toArrayNumber(["91", "44"]))
console.log(toArrayNumber(["9.5", "58"]))