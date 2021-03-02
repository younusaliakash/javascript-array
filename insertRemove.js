// ** insert & remove

var arr = [ 1,2,3,4,5,6,7,8,9,10]

// arr [4] = 50 // Replace Data
// arr.push(20) // insert in last index
// arr.unshift(60) // insert in index 0
// arr.splice(5, 0, 1000) // insert data in row without replacxement

//Remove data
// arr [1] = undefined
// arr.pop()  //delate data from last index
// arr.shift() // delate data from fonr index
arr.splice(8, 1)

console.log(arr)