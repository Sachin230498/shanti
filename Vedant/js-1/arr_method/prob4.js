// slice method  => it is using for making shallow copy

let arr = [1,2,3,4,5,6,7,8,9,10]

// let a = arr.slice(2, 1)

//  console.log(a)
//  console.log(arr)

// splice method => it is using for removing el and adding el
// its take 3 parameter index, number of el, value

// let a = arr.splice(2, 1)  //its remove 3 el from 2nd index
// console.log(arr)


let b = arr.splice(2, 2, "abc","dd")
console.log(arr)



