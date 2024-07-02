//local storage


//capacity 8 to 10mb
//insecure data
// no exipere
// only store string data

// localStorage.setItem("key" , value )   for saving data to local storage
// localStorage.getItem("key") 
// localStorage.removeItemItem("key")
// localStorage.clear("key")




// localStorage.setItem("data" , "abcdefgh")


// let a = localStorage.getItem("data")

// console.log(a)


//json data

let obj = {
    name : "sachin",
    age : 20,
    address : "pune"
}

// let json_obj = {
//     "name" : "sachin",
//     "age" : "20",
//     "address" : "pune"
// }

// let json = JSON.stringify(obj)

// console.log(json)




// let num = 123456
 let arr = ["ssf", 12, [], {}]

console.log(arr)

 localStorage.setItem("num", JSON.stringify(arr))


 let arr1 =   JSON.parse( localStorage.getItem("num"))

 console.log(arr1)





