// api  

//fetch
//axios
//XHR
//Web socket


//fetch(api, {})

// console.log(fetch("https://fakestoreapi.com/products"));

let main = document.getElementById("main");



let api = "https://fakestoreapi.com/products";



// 1st method

// let a = fetch(api).then(function (res){
//     // 1st network request get response body 
//     // console.log(res)

//     // 2nd network request get data
//    let data = res.json();
// //    console.log(data)

//     // 3rd network request process data
//     data.then(function (data1){
//         //   console.log(data1)

//           data1.map(function(el,index){
//               console.log(el)
//          let div = document.createElement("div");

//          let title = document.createElement("h1");
//         title.innerText = el.title;

//          let price = document.createElement("h3");
//          price.innerText = "Price: "+el.price;

//          let img = document.createElement("img");
//          img.src = el.image;

//          div.append(img, title, price);

//          main.appendChild(div);


//           })
         
//     })
   
// }).catch(function (err) {
// console.log(err});



// 2nd method  async await 

async function getData() {
     let res =  await fetch(api)
    // //  console.log(res)
    // let res2 = res.json();
    // // console.log(res2);

    // let data = await res2;
    // console.log(data)
    let data = await res.json();
    //  console.log(data)
    display(data);
}

getData();



function display(abc){
    //  console.log("aasdad", abc)
      abc.map(function(el,index){
              console.log(el)
         let div = document.createElement("div");

         let title = document.createElement("h1");
        title.innerText = el.title;

         let price = document.createElement("h3");
         price.innerText = "Price: "+el.price;

         let img = document.createElement("img");
         img.src = el.image;

         div.append(img, title, price);

         main.appendChild(div);


          })
         
}















