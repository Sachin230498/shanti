let main = document.getElementById("main");

let login_data = JSON.parse(localStorage.getItem("login_data"));
let cart_arr = JSON.parse(localStorage.getItem("cart_data")) || [];
let navbar = document.getElementById("list");
let tp = 0;
cart_display(cart_arr);

if (login_data !== null) {
  navbar.innerHTML = null;
  let name = document.createElement("h3");
  name.innerText = login_data;

  let total = document.createElement("h3");
  total.innerText = "Total" + " - " + tp;

  let logout = document.createElement("button");
  logout.innerText = "Logout";
  logout.addEventListener("click", function () {
    // console.log("hello")
    localStorage.removeItem("login_data");
    window.location.href = "../html/login.html";
  });
  //   console.log(name)

  navbar.append(name, total, logout);
}



function cart_display(data) {
    main.innerHTML = "";
  data.map(function (el, index) {
    tp = tp + Math.floor( el.price)
    // console.log(tp)
    //   console.log(el)
    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let img = document.createElement("img");
    img.src = el.image;

    let Checkout = document.createElement("button");
    Checkout.innerText = "Checkout";
  

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", function () {
      remfun(index);
    });

    div.append(img, title, price, Checkout, remove);

    main.append(div);
  });
}


function remfun(index){
    console.log(index)
    cart_arr.splice(index, 1)
    localStorage.setItem("cart_data", JSON.stringify(cart_arr));
    cart_display(cart_arr)

}