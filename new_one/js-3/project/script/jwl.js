import navbar from "./navbar.js";
import { getData, display } from "../script/fetch.js";
let nav = document.getElementById("nav");

// console.log(nav)

nav.innerHTML = navbar();

let api = "https://fakestoreapi.com/products/category/jewelery";

let data = await getData(api);
// console.log(data);

display(data);
