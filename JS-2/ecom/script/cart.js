let cart_arr = JSON.parse(localStorage.getItem("cart_data")) || [];
display(cart_arr);
let login_data = JSON.parse(localStorage.getItem("login_data"));

let log = document.getElementById("login");

if (login_data !== null) {
  log.innerHTML = null;
  let name = document.createElement("h3");
  name.innerText = login_data.name;

  let cart = document.createElement("a");
  cart.href = "./cart.html";
  cart.innerText = "Cart";

  let logout = document.createElement("button");
  logout.innerText = "Logout";
  logout.addEventListener("click", logoutfun);

  log.append(name, cart, logout);
}

function logoutfun() {
  localStorage.removeItem("login_data");
  window.location.href = "./login.html";
  //   console.log("hrer");
}

function display(data){

data.map(function(el,index){
    // console.log(el)
  let div = document.createElement("div");

     let img = document.createElement("img")
     img.src =
       "https://cdn.pixabay.com/photo/2023/03/29/16/13/labrador-retriever-7885882_640.jpg";

     let nam = document.createElement("h1")
     nam.textContent = el.name;
     let price = document.createElement("h3")
     price.textContent = "Price: " + el.price;
     let cart = document.createElement("button")
     cart.textContent = "Delete"
     cart.addEventListener("click",function(){
      delfun(index);
     });

   div.append(img,nam,price,cart)
   main.append(div)
})
}




function delfun(item){
 cart_arr.splice(item,1)
 localStorage.setItem("cart_data", JSON.stringify(cart_arr));
 window.location.reload();
 display(cart_arr)

}