// let user = JSON.parse(localStorage.getItem("login_user"));
let product = JSON.parse(localStorage.getItem("product"))
// console.log(product)



// let nav = document.getElementById("nav");
let main = document.getElementById("main");

display(product);
//  console.log(user)



let cart_arr =JSON.parse(localStorage.getItem("cart"))  || [];



function display(data){
    main.innerHTML = ""
   data.map((el)=>{
    //    console.log(el)

    let div = document.createElement("div")

    let title = document.createElement("h1")
    title.innerText = el.title;
    let price = document.createElement("h2")
    price.innerText = el.price;
    let img = document.createElement("img")
    img.src = el.image;

    let cart = document.createElement("button")
cart.addEventListener("click",function(){
    addfun(el);
})
    cart.innerText = "Add to Cart";

    
    div.append(img,title,price,cart)

    main.append(div)

   })
}




function addfun(data){
    // console.log(data.id)
    // main.innerHTML = ""
    let flag = false;


    cart_arr.forEach(function(el){
       if(el.id==data.id){
         flag = true;
            //  console.log(el.id);
            //  console.log(data.id);
       }

    })
  

    if(flag == true){
        alert("product is already added")
    }else{
        alert("product added");
         cart_arr.push(data)
    localStorage.setItem("cart", JSON.stringify(cart_arr))
        
    }

}