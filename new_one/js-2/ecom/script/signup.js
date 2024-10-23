let form  = document.querySelector("form")

form.addEventListener("submit", getData)

let signup_arr = JSON.parse(localStorage.getItem("signup_data")) || [];

function getData(){
    event.preventDefault()

    let data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
    }

    signup_arr.push(data)
    console.log(signup_arr)
 
    localStorage.setItem("signup_data", JSON.stringify(signup_arr))
    alert("signup successfull")
    window.location.href = "../html/login.html";
}


// console.log((window.location.href = "../html/login.html"));