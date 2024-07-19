let navbar = document.getElementById("navbar");
import  nav from "../SCRIPT/nav.js";
 nav(); // Call the navigation function

let login_data = JSON.parse(localStorage.getItem("loginData"));


    navbar.innerHTML = nav();







let api = "https://fakestoreapi.com/products";
import {getData,display} from "../SCRIPT/fetch.js"

 let a = await getData(api)
//  console.log(a)

display(a)












