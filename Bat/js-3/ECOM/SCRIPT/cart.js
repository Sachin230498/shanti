let navbar = document.getElementById("navbar");
import nav from "../SCRIPT/nav.js";
nav(); // Call the navigation function
navbar.innerHTML = nav();

let main = document.getElementById("main");;
let cart_data = JSON.parse(localStorage.getItem("cart_data"));
// console.log(cart_data)
display(cart_data)


function display(data) {
  main.innerHTML = "";
  data.map((el, index) => {
    let div = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = "Price: " + el.price;
    let img = document.createElement("img");
    img.src = el.image;
    let button = document.createElement("button");
    button.innerText = "addtocart";
    button.addEventListener("click", () => {
      cartfun(el);
    });

    div.append(img, title, price, button);

    main.appendChild(div);
  });
}
