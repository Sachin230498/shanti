let form  = document.querySelector('form');
console.log(form);

let signup_arr = JSON.parse(localStorage.getItem('signup_arr')) || [];

form.addEventListener("submit", function(){
    event.preventDefault();
    // console.log("form has been submitted")
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    // console.log(name, email, phone, password);

    

    let obj = {
        name: name,
        email: email,
        phone: phone,
        password: password
    }


    signup_arr.push(obj);
    localStorage.setItem("signup_arr", JSON.stringify(signup_arr));
    alert("signup successful")
    window.location = "./login.html";       
    console.log(signup_arr)
})

// console.log(window.location)


