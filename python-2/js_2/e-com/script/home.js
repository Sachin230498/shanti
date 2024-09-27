let product_data = JSON.parse( localStorage.getItem("data"))
let login_user = JSON.parse(localStorage.getItem("login_user"))




let nav = document.getElementById("mini_nav")



let container = document.getElementById("container");
// console.log(product_data)
display(product_data)


if(login_user != null){
    nav.innerHTML = ""

    let name = document.createElement("h3")
    name.innerText = login_user.name

    let cart = document.createElement("a")
    cart.addEventListener("click", function(){
           window.location.href = "../html/cart.html";
    })
    cart.innerText = "cart"
    let logout = document.createElement("a")
    logout.addEventListener("click", function(){
        localStorage.removeItem("login_user");
         window.location.href = "../html/login.html";

    })
    logout.innerText = "LOGOUT"

    nav.append(name,cart,logout)
}







let cart_data = JSON.parse(localStorage.getItem("cart")) || [];







function display(data){
    data.forEach(function(el,index){
        // console.log(el)

        let div = document.createElement("div")
        div.setAttribute("id","div")

        let title = document.createElement("h1")
        title.innerText = el.title;
    
        let price = document.createElement("h2")
        price.innerText = el.price;

      
        let image = document.createElement("img")
        image.src = el.image

        let cart_btn = document.createElement("button")
        cart_btn.setAttribute("id", "carta")
        cart_btn.innerText = "Add to Cart"
        cart_btn.addEventListener("click", function(){
            // console.log(el)
          cartfun(el)
        })

        div.append(image,title,price,cart_btn)


        container.append(div)

    })
}


let div = document.getElementById("div")


// console.log(nav.innerHTML)


function cartfun(data){
    let flag = false
let carta = document.getElementById("carta")
// console.log(carta)
    cart_data.forEach(function(el){
    //   console.log("ls", el)
    //   console.log("btn" , data)
    if(data.id == el.id){
        // alert("product is already added")
        //  carta.innerText = "Already Added"
        //  div.append(carta)
        //  console.log(d)
        flag = true
        // console.log(carta)

    }
    })

    if(flag == true){
        carta.disabled = true
    }

    // console.log(flag)
    // if(cart_data)

    //   cart_data.push(data);


    //   localStorage.setItem("cart", JSON.stringify(cart_data));
}