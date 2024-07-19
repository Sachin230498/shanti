// api  

//fetch
//axios
//XHR
//Web socket


//fetch(api, {})

// console.log(fetch("https://fakestoreapi.com/products"));

let fil = document.getElementById("filter")
// console.log(fil)

let search = document.getElementById("search")
// console.log(search)

let main = document.getElementById("main");



let api = "https://fakestoreapi.com/products";
let actual_data;


// 1st method

// let a = fetch(api).then(function (res){
//     // 1st network request get response body 
//     // console.log(res)   //response data is in readblestream

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
      // console.log(res)
    //  let res2 = res.json();
    //  console.log(res2);

    // let data = await res2;
    // console.log(data)
    let data = await res.json();
    //  console.log(data)
    actual_data = data;
    display(data);
}

getData();



const display = (abc) =>{
  main.innerHTML = ""
    //  console.log("aasdad", abc)
      abc.map((el,index)=>{
              // console.log(el)
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



fil.addEventListener("change",Pricefil )

const Pricefil =()=>{

  if(fil.value==="LTH"){
   actual_data.sort(function(a,b){
    // console.log(a.price,b.price)
     return a.price - b.price
  })
}else if(fil.value === "HTL"){
  actual_data.sort(function(a,b){
    return b.price - a.price
  })


}
  // console.log(actual_data);
  display(actual_data);
 
}


search.addEventListener("input", searchFil)


function searchFil(){
   console.log(search.value)

  let  searchQuery = search.value.toLowerCase();
  // console.log(searchQuery)
  let b = actual_data.filter(function(products){
   return products.title.toLowerCase().includes(searchQuery)
  }) 
  display(b);
}



// let arr = [4,5,8,2,11, 45, 78,35,25]

// let b = arr.filter(function(num){
//      return num > 10
// })

// console.log(b)



// let a = arr.sort(function(a,b){
//   return a-b
// })

// console.log(a)
















