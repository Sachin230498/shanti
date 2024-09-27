let cart_data = JSON.parse(localStorage.getItem("cart"))

let container = document.getElementById("container");

display(cart_data);


function display(data) {
    container.innerHTML = " "
  data.forEach(function (el, index) {
    // console.log(el)

    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = el.title;

    let price = document.createElement("h2");
    price.innerText = el.price;

    let image = document.createElement("img");
    image.src = el.image;

    let Remove = document.createElement("button");
    Remove.addEventListener("click",function(){
        removefun(index)
    } )
    Remove.innerText = "Remove";
  

    div.append(image, title, price, Remove);

    container.append(div);
  });
}


function removefun(index){
    cart_data.splice(index,1)
   localStorage.setItem("cart", JSON.stringify(cart_data));
   display(cart_data)
}


