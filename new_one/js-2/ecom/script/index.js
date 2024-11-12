let main = document.getElementById("main");
let product_data = JSON.parse(localStorage.getItem("data"));
// console.log(product_data)
display(product_data);

let login_data = JSON.parse(localStorage.getItem("login_data"));
let navbar = document.getElementById("list");
// console.log(login_data)

if (login_data !== null) {
  navbar.innerHTML = null;

  let name = document.createElement("h3");
  name.innerText = login_data;

  let cart = document.createElement("a");
  cart.innerText = "cart";

  let logout = document.createElement("button");
  logout.innerText = "Logout";
  logout.addEventListener("click", function () {
    // console.log("hello")
    localStorage.removeItem("login_data");
    window.location.href = "../html/login.html";
  });
  //   console.log(name)

  navbar.append(name, cart, logout);
}

function display(data) {
  data.map(function (el, index) {
    //   console.log(el)
    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let img = document.createElement("img");
    img.src = el.image;

    let cart = document.createElement("button");
    cart.innerText = "Add to Cart"


    div.append(img, title, price, cart);

    main.append(div);
  });
}


