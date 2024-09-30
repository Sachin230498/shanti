let form = document.querySelector("form")

form.addEventListener("submit", getData)

let signup_arr =JSON.parse( localStorage.getItem("signup_data")) ||  [];

function getData(event){
    event.preventDefault()

    // console.log(event)

    let obj = {
        name: form.name.value,
        email:form.email.value,
        password:form.password.value
    }

    signup_arr.push(obj)

    console.log(signup_arr)


    localStorage.setItem("signup_data",JSON.stringify(signup_arr))
    alert("signup successfull")
    

    window.location.href = "../Html/login.html";
}




// window

// console.log(window.location.href)

