// API

// Fetch = Network request

//fetch(api)

let api = "https://resta.onrender.com/categories";

let container = document.getElementById("container");

getData();

// function getData(){
// let a = fetch(api)

// a.then(function(res){
//     // console.log(res)
//     // 1st network request
//     let getData = res.json()
//    //2nd network request
//     // console.log(data)
//     getData.then(function(data){
//         // console.log(data)
//         display(data);

//     })
// }).catch(function(error){
//     console.log(error)
// })
// }

// Async Await

async function getData() {
  try {
    let res = await fetch(api);
    let data = await res.json();
    // console.log(data);
    display(data)
  } catch (error) {
    console.log(error);
  }
}

function display(arr) {
  arr.forEach(function (el, index) {
    //  console.log(el)

    let div = document.createElement("div");

    let nam = document.createElement("h1");
    nam.innerText = `Title :-  ${el.name}`;
    let price = document.createElement("h3");
    price.innerText = `Price :- ${el.price}`;
    let img = document.createElement("img");
    img.src = el.img;

    div.append(img, nam, price);

    container.append(div);
  });
}

// // template literal

// // let greet = "hello"

// let name = "Rahul"

// let y = "how are you ?"

// // Hello Rahul , How are you

// let x =  `Hello ${name} , ${y}`

// console.log(x)

// console.log("hello" , name, "how are you")



// CRUD 
// Create = Post Request
// Read   = get Request
// Update = Put/Patch Request
// Delete = Delete Request




// function abc(a){
//     // console.log(a+b)
//     return a
// }

// let b =  abc(5)
// console.log(b)

//  const abc = a => a 
// let c =  abc(10)
// console.log(c)




let new_api = "https://fakestoreapi.com/products";


