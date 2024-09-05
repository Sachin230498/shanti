let loginData = localStorage.getItem("loginuser")
console.log(loginData)

let nav =document.getElementById("username") 


if(loginData != null){
     nav.innerHTML=""
     let name = document.createElement("h3")
     name.innerText = loginData

     let logout = document.createElement("a")
     logout.innerText = "logout"
     logout.addEventListener("click", function(){
        localStorage.removeItem("loginuser");
     })
     logout.href = "../pages/login.html"

     nav.append(name,logout)
}