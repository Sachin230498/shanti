import navbar from "./navbar.js";
import { getData, display } from "../script/fetch.js";

let nav = document.getElementById("nav");

// console.log(nav)

nav.innerHTML = navbar();

let api = "https://fakestoreapi.com/products";

let data = await getData(api);

display(data);



let logo = document.getElementById("logo");
let list = document.getElementById("list");

// logo.addEventListener("click", menuicon);
// function menuicon() {

//   let logo = document.getElementById("logo");
//   list.style.display = "flex"
//   list.style.display = ""


// }

logo.addEventListener("click", () => {
    console.log("hello")
  list.classList.toggle("hide");
});


