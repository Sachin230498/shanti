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
    cart.innerText = "cart"
    let logout = document.createElement("a")
    logout.innerText = "LOGOUT"

    nav.append(name,cart,logout)
}














function display(data){
    data.forEach(function(el,index){
        // console.log(el)

        let div = document.createElement("div")

        let title = document.createElement("h1")
        title.innerText = el.title;
    
        let price = document.createElement("h2")
        price.innerText = el.price;

      
        let image = document.createElement("img")
        image.src = el.image

        div.append(image,title,price)

        container.append(div)


    })
}



// console.log(nav.innerHTML)