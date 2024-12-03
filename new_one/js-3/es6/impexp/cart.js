let nav = document.getElementById("navbar");

import navbar from "./navbar.js";
import {getData,display} from "./fetch.js";

  let a = navbar();
  nav.innerHTML = a;


  let api = "https://fakestoreapi.com/products"

  let data = await getData(api)

//   console.log(data)

display(data)





