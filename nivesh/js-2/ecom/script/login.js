let signupData = JSON.parse(localStorage.getItem("signupData")) || [];
// console.log(signupData)

let form = document.querySelector("form")

form.addEventListener("submit", login)

function login(){
    event.preventDefault();
    let login_obj = {
          email : form.email.value,
          password:form.password.value
    }

    let flag  =false//declare
    for(let i =0;i<=signupData.length-1;i++){
        if(login_obj.email==signupData[i].email){
            if(login_obj.password==signupData[i].password){
                flag = true; //assign
                localStorage.setItem("loginuser", signupData[i].name) 
            }
            else{
                flag = 123  //reassign
            }
         
        }
    }

    if(flag===true){
        // console.log("login")
        alert("Login")
        window.location.href = "../pages/home.html";
    }else if(flag===123){
        // console.log("wrong password")
        alert("wrong password")
    }
    else{
        // console.log("Login failed")
        console.log(flag)
        alert("login failed ")
    }

}