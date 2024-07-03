let signup_data = JSON.parse(localStorage.getItem('signup_arr'))

let form = document.querySelector('form')


form.addEventListener('submit', function (event) {
    event.preventDefault();
 
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;

 let user = {
    email: email,
    password: password,
 }

 let flag = false

 for(let i = 0; i < signup_data.length; i++){
     if(signup_data[i].email === user.email){
        // console.log("success")
        if(signup_data[i].password === user.password){
           flag = true
           break;
        }
     }   
 }



if(flag === true){
    alert("login successful");
    localStorage.setItem("login_data", JSON.stringify(user));
    window.location = "./index.html";

 }else{
    alert("email or password incorrect")
 }
//console.log(email, password)
})