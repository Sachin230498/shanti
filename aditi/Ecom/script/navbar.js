let nav = document.getElementById("nav");
let user = JSON.parse(localStorage.getItem("login_user"));


if (user != null) {
  nav.innerHTML = "";

  let nam = document.createElement("h2");
  nam.innerText = user.name;
  let logout = document.createElement("button");
  logout.innerText = "LogOut";
  logout.addEventListener("click", logoutfun);
  let cart = document.createElement("a");
  cart.innerText = "Cart";
  cart.href = "../Html/cart.html";

  nav.append(nam, cart, logout);
}



function logoutfun() {
  // console.log("he;;p")
  localStorage.removeItem("login_user");
  window.location.href = "../Html/login.html";
}
