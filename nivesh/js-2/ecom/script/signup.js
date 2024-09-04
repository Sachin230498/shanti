let form  = document.querySelector("form")
let signupData = JSON.parse(localStorage.getItem("signupData")) || [];

form.addEventListener("submit", getData)

function getData(){
    event.preventDefault()
    let signup_obj = {
        name :form.name.value,
        email:form.email.value,
        password:form.password.value
    }

    signupData.push(signup_obj)
    localStorage.setItem("signupData", JSON.stringify(signupData))

    alert("Ragistration successfully")
    // console.log(signupData)
    window.location.href = "../pages/login.html";

}


// localStorage.clear()


console.log(window.location.href)
 
