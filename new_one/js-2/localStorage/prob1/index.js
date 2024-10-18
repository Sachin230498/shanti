// local Storage 

// capicity 8 to 10
// only store string
// insecure
//  no expiry date


// localStorage.setItem(key , value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()


let a = "ram";
localStorage.setItem("name", a)


let geta = localStorage.getItem("name")
// console.log(geta)


let num = 12345;
// console.log(num)
// localStorage.setItem("num", num)


// let n = localStorage.getItem("num")
// console.log(typeof n)




// JSON 
// JSON.stringify
// JSON.parse


localStorage.setItem("num", JSON.stringify(num))


let number = JSON.parse( localStorage.getItem("num"))

console.log(number)


let arr = [12,55,88,{a:"abc", b:"xyz"}, [45,88,95], "rahul"];
console.log(arr)
localStorage.setItem("array",JSON.stringify( arr))


let arr1 = JSON.parse( localStorage.getItem("array"))
console.log(arr1)




