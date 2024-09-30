let loginData = localStorage.getItem("loginuser")
// console.log(loginData)

let search = document.getElementById("search");
search.addEventListener("input", searchfun)

let filter =document.getElementById("filter")
// console.log(filter)
filter.addEventListener("change", Price_filter)
let main = document.getElementById("main");
let product_data = JSON.parse(localStorage.getItem("data"))
// console.log(product_data)
display(product_data)


let nav =document.getElementById("username") 


if(loginData != null){
     nav.innerHTML=""
     let name = document.createElement("h3")
     name.innerText = loginData

     let logout = document.createElement("a")
     logout.innerText = "logout"
     logout.addEventListener("click", function(){
        localStorage.removeItem("loginuser");
     })
     logout.href = "../pages/login.html"

     nav.append(name,logout)
}

function display(data){
   main.innerHTML = null
   // for(let i = 0;i<data.length;i++){
   data.forEach(function(el){
     //  console.log(data[i])
     let div = document.createElement("div");
     let name = document.createElement("h1");
     name.innerText = el.name;
     let price = document.createElement("h2");
     price.innerText = el.price;
     let img = document.createElement("img");
     img.src = el.img;

     div.append(img, name, price);

     main.append(div);
   })
     

 
   }



function Price_filter(){
   let sorted_arr;
   if(filter.value == "LTH"){
      sorted_arr = product_data.sort(function (a, b) {
        return a.price - b.price;
      });
   }else if (filter.value == "HTL") {
       sorted_arr = product_data.sort(function (a, b) {
         return b.price - a.price;
       });
   }
   else{
      return sorted_arr
   }

   display(sorted_arr);
   // console.log(a)
  

}


function searchfun(){
   // console.log("Hello")
   // console.log(search.value)
   let data = product_data.filter(function(el){
      // console.log(el)
       return el.name.toLowerCase().includes(search.value);
   })

   display(data)
   // console.log(data)
}




// sorting
// filter

//  let arr = [7,8,1,2,369,11,44,555,789,98,5,4,3];

//  let a = arr.filter(function(el){
//    // console.log(el)
//    if(el>355){
//       return el
//    }
//  })

//  console.log(a)
// // let str = ["mango", "apple", "chiku","banana"]

// let a = arr.sort(function(a,b){
//    // console.log(a,b)
//    // console.log(a-b)
//    return b-a
// })
// // str.sort()

// console.log(a)