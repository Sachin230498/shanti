let form = document.querySelector("form")


form.addEventListener("submit", getData)

let signup_arr = JSON.parse(localStorage.getItem("signupData")) || []


function getData(){
    event.preventDefault()
    // console.log("hello")

    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;



    let obj = {
        name:name,
        email:email,
        password:password
    }

    signup_arr.push(obj)

    localStorage.setItem("signupData", JSON.stringify(signup_arr))


    alert("User Created")

    window.location.href = "../html/login.html"


    // console.log(name,email,password)
}

