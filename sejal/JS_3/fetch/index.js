let api = "https://resta.onrender.com/categories"

let main = document.getElementById("main")
//console.log(fetch(api));

// fetch(api).then(function (res) {
//     //  console.log(res);
//     //1st network request
//     let a = res.json()   //get the res body and parse it
//     // console.log("a",a);
//     a.then(function (data) {  //2nd network request
//         console.log(data);
//     })
// })
//     .catch(function (err) {
//         console.log(err);
//     })


async function getData() {
try {
     let res = await fetch(api); //1st network request
     // console.log(res);
     let data = await res.json(); //get the res body and parse it
     console.log(data);
     display(data);
} catch (error) {
    console.log(error);
}

   
}

getData()


function display(product) {
    product.forEach(function (el, index) {
        let div = document.createElement('div');
       
        let name = document.createElement('h2');
        name.innerText = el.name
        let price = document.createElement('h3');
        price.innerText = el.price;
        let img = document.createElement('img');
        img.src = el.img

        div.append(img, name, price);
        main.appendChild(div);
         
    })
}



// url = https://fakestoreapi.com/products
