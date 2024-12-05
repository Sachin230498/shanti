import navbar from "./navbar.js";
import { getData, display } from "../script/fetch.js";
let nav = document.getElementById("nav");

// console.log(nav)

nav.innerHTML = navbar();

let api = "https://fakestoreapi.com/products/category/electronics";

let data = await getData(api);
console.log(data);

display(await getData(api));
