let navbar = document.getElementById("navbar");
import nav from "../SCRIPT/nav.js";
nav(); // Call the navigation function
navbar.innerHTML = nav();


let api = "https://fakestoreapi.com/products/category/jewelery";
import { getData, display } from "../SCRIPT/fetch.js";

let a = await getData(api);
//  console.log(a)

display(a);
