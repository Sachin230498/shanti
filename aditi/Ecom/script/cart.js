let cart_arr = JSON.parse(localStorage.getItem("cart")) ;
display(cart_arr)

function display(data) {
    main.innerHTML = "";
  data.map((el,index) => {
    // console.log(el);

    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h2");
    price.innerText = el.price;
    let img = document.createElement("img");
    img.src = el.image;

    let cart = document.createElement("button");
    cart.addEventListener("click",function(){ 
         removefun(index)
    }
    )

    cart.innerText = "Remove Item";

    div.append(img, title, price, cart);

    main.append(div);
  });
}


function removefun(index){
    cart_arr.splice(index,1)
     localStorage.setItem("cart", JSON.stringify(cart_arr));
    display(cart_arr)
}