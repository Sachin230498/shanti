let cart_arr = JSON.parse(localStorage.getItem("cart_data")) || [];
let login_data = JSON.parse(localStorage.getItem("login_data"));
let total = document.getElementById("cart_total");
let main = document.getElementById("main");

display(cart_arr);

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
}

function display(data) {
  main.innerHTML = ""; // Clear previous content
  let c_total = 0; // Reset total

  data.forEach(function (el, index) {
    c_total += +el.price;

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src =
      "https://cdn.pixabay.com/photo/2023/03/29/16/13/labrador-retriever-7885882_640.jpg";

    let nam = document.createElement("h1");
    nam.textContent = el.name;

    let price = document.createElement("h3");
    price.textContent = "Price: " + el.price;

    let cart = document.createElement("button");
    cart.textContent = "Delete";
    cart.addEventListener("click", function () {
      delfun(index);
    });

    div.append(img, nam, price, cart);
    main.append(div);
    main.appendChild(document.createElement("hr")); // Add a line break for better readability+

  });

  total.innerText = "Total: Rs" + c_total; // Update total
}

function delfun(item) {
  cart_arr.splice(item, 1);
  localStorage.setItem("cart_data", JSON.stringify(cart_arr));
  display(cart_arr); // Refresh display after deletion
}

// Initial total calculation
display(cart_arr);
