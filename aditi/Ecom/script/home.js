let user = JSON.parse(localStorage.getItem("login_user"));
let product = JSON.parse(localStorage.getItem("product"))
// console.log(product)


let nav = document.getElementById("nav");
let main = document.getElementById("main");

display(product);
//  console.log(user)


if(user!= null){
    nav.innerHTML = "";

    let nam = document.createElement("h2");
    nam.innerText = user.name;
    let logout = document.createElement("button")
    logout.innerText = "LogOut"
    logout.addEventListener("click", logoutfun)
    let cart = document.createElement("a")
    cart.innerText = "Cart"

    nav.append(nam,cart,logout)
}

function logoutfun(){
    // console.log("he;;p")
    localStorage.removeItem("login_user");
       window.location.href = "../Html/login.html";

}



function display(data){
   data.map((el)=>{
       console.log(el)

    let div = document.createElement("div")

    let title = document.createElement("h1")
    title.innerText = el.title;
    let price = document.createElement("h2")
    price.innerText = el.price;
    let img = document.createElement("img")
    img.src = el.image;

    let cart = document.createElement("button")
    cart.innerText = "Add to Cart";

    div.append(img,title,price,cart)

    main.append(div)

   })
}
