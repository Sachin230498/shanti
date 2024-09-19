// local storage
// storage capacity 8 to 10mb
// only store strings
// insecure
// No expiry date


// localStorage.setItem(key , value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()


let str = "hello";
localStorage.setItem("name", str)


let b =localStorage.getItem("name")
// console.log(b)


let num = 1234;
// console.log(num)


localStorage.setItem("number", num)


let c = localStorage.getItem("number")
// console.log("LS", c)


let arr = [1,2,7,8,["rahul","sikha"], {a:"x", b:"y"}, true];
console.log(arr)


localStorage.setItem("arr",JSON.stringify(arr) )


let lsarr = JSON.parse( localStorage.getItem("arr"))
console.log(lsarr)




// JSON

// let obj = {
//     name:"rahul",
//     age:25
// }
// // console.log(obj)

// let json_obj = {
//     "name":"priti",
//     "age":25
// }
// // console.log(json_obj)

// let x =  JSON.stringify(obj)
// // console.log(typeof x)

// let y = JSON.parse(x)
// console.log(y)