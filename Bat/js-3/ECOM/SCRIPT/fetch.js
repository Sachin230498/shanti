let main = document.getElementById('main');
let cart_arr = JSON.parse(localStorage.getItem("cart_data")) || [];

async function getData(api) {
  let res = await fetch(api);
  let data = await res.json();
//    console.log(data);
return data;
}


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
        cartfun(el)
    });
   
    div.append(img, title, price, button);
   
    main.appendChild(div);
  });
}


let flag;
function cartfun(data){
    // console.log(data)

    cart_arr.map((el) => {
         if(el.id == data.id){
            flag = true
             return;
         }
         else{
           flag = false
           return
         }
       
    })

    if(flag){
         alert("Item already in cart");
    }else{
          cart_arr.push(data);
         localStorage.setItem("cart_data", JSON.stringify(cart_arr));
         alert("product added to cart")
    }

}

export {getData,display};



