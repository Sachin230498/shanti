let navbar = document.getElementById('navbar');
import nav from "../SCRIPT/nav.js"

nav(); // Call the navigation function

navbar.innerHTML = nav();


let signupData = JSON.parse(localStorage.getItem('signupData'));
// console.log(signupData)

let form = document.querySelector('form');
form.addEventListener('submit', login_form)

function login_form(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    let login_obj = {
        email: email,
        password: password
    }

    // console.log(login_obj)
    let flag = false;
    // console.log(signupData)

    signupData.map((el)=>{
        // console.log(el) 
        if(el.email == login_obj.email){
            if(el.pass == login_obj.password){
                flag = true;
                return;
            }else{
                alert('Invalid Password!')
            }
           
        } 
    })

    if(flag){
          alert("Login Successful!");
          window.location.href = "../HTML/index.html";
    } else{
            alert('Invalid Email')
        }
 

}
