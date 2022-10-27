const formatPhoneNumber = (arr) => {
    const headNumber = `(${arr.slice(0,3).join("")})`;
    const tailNumber = `${arr.slice(3,6).join("")}-${arr.slice(6,10).join("")}`

    return `${headNumber} ${tailNumber}`
}


console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
console.log(formatPhoneNumber([5,1,9,5,5,5,4,4,6,8]))