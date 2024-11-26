// fetch
// api

let api =  "https://fakestoreapi.com/products";
let container = document.getElementById("container")

//syntex
//  fetch(api)

// console.log(fetch(api))

// function getData(){
// let data = fetch(api)

// data.then(function(res){
//     // console.log(res.json())

//     let a = res.json()
//     a.then(function(real_data){
//         console.log(real_data)
//     })
// }).catch(function(err){
//     console.log(err)
// })
// }

// getData()

// async await

// let api2 = "https://resta.onrender.com/categories";

async function getData() {
  let res = await fetch(api);
  //   console.log(res.json())
  let real_data = await res.json();
//   console.log(data);
display(real_data)
}

getData();


function display(data){

    data.map(function(el){
        console.log(el)

        let div = document.createElement("div")
        div.setAttribute("class", "inner")

        let name = document.createElement("h1")
        name.innerText = el.title;
        let img = document.createElement("img")
        img.src = el.image;
        let price = document.createElement("h2")
        price.innerText = el.price


        div.append(img,name, price)

        container.append(div)


    })

}