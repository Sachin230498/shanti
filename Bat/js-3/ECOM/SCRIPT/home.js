let navbar = document.getElementById("navbar");
import nav from "../SCRIPT/nav.js";

nav(); // Call the navigation function

navbar.innerHTML = nav();



let login_data = JSON.parse(localStorage.getItem("loginData"));
// console.log(login_data)

let nav2 = document.getElementById("nav2");
// console.log(nav2)
if(login_data != null){
    nav2.innerHTML = null;

   let name = document.createElement("h2")
   name.innerText = login_data.name;
   
   let cart = document.createElement("a")
   cart.innerText = "Cart"
   cart.href = "http://"

   nav2.append(name, cart);
}
