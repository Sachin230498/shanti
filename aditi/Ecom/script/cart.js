let cart_arr = JSON.parse(localStorage.getItem("cart")) ;
let total = document.getElementById("total");
// total.innerText= 
let count = 1;


display(cart_arr)


function display(data) {
    main.innerHTML = "";
    let total_value = 0;
  data.map((el,index) => {
    // console.log(el);
   total_value = total_value + el.price;
   total.innerText= total_value
    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h2");
    price.innerText = el.price;
    let img = document.createElement("img");
    img.src = el.image;

    let remove = document.createElement("button");
    remove.addEventListener("click",function(){ 
         removefun(index)
    }
    )


    let qu_div = document.createElement("div") 
    qu_div.setAttribute("id", "qunatity_div")
    let plus = document.createElement("button")
    plus.innerText = "+"
    let quantity = document.createElement("h3")
    quantity.innerText = count;
    let minus = document.createElement("button")
    minus.innerText = "-";

    qu_div.append(plus,quantity,minus)



    remove.innerText = "Remove Item";

    div.append(img, title, price, remove, qu_div);

    main.append(div);
  });
}


function removefun(index){
    cart_arr.splice(index,1)
     localStorage.setItem("cart", JSON.stringify(cart_arr));
    display(cart_arr)
}