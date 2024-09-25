// Local Storage

// Provided by browser
// Minimal space 8 to 10mb
// inscure data 
// only store string  
// no expire date



// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()



// localStorage.setItem("str", "Rahul")


// let a =  localStorage.getItem("str")
// console.log(a)


// let x = "Aditi"

// localStorage.setItem("name", x)

// localStorage.removeItem("name")

// localStorage.clear()


let num = 123456
// console.log(typeof num)

// localStorage.setItem("num", num)

// let a = localStorage.getItem("num")
// console.log(typeof a)



// let arr = [1,2,3,{a:"xyz",b:"asss"}, [78,89]]

// console.log(arr)


// // localStorage.setItem("arr", arr)
// localStorage.setItem("arr", JSON.stringify(arr))


// let arr2 = JSON.parse( localStorage.getItem("arr"))
// console.log(arr2)

// JSON 


// let  obj = {
//     name:"Nivesh",
//     age:24
// }


// let json_obj = {
//   "name": "Nivesh",
//   "age": 24,
// };


// JSON.stringify()
// JSON.parse()



let h1 = document.getElementById("c");

let x;
if (localStorage.getItem("x")==null ){
    x = 0;
} else{
    x = localStorage.getItem("x");
}
    
    h1.innerText = x;

function count(){
    // console.log("hello")
    x++;
    localStorage.setItem("x", x)

    h1.innerText = x;
}


// console.log(localStorage.getItem("abc"))