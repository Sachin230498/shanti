// local Storage


// unsecure
// 8 to 10mb
// only store strings

// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()


let a = "hello";
let num = 123456
let arr = [1,2,3,4,6, [] , {}]

// localStorage.setItem("data", num)

localStorage.setItem("arr", JSON.stringify(arr))

// let b = localStorage.getItem("data")

// // console.log(num)
// // console.log(b)

let ar1 = JSON.parse(localStorage.getItem("arr"));
console.log(ar1)
// console.log(arr)


//  json vs object


// let obj = {
//     name:"rahul",
//     age:25
// }


// let jsonobj = {
//   "name":"rahul",
//   "age":25
// }

// JSON.stringify()
// JSON.parse()