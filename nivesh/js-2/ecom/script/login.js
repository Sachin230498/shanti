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

    let flag = false
    for(let i =0;i<signupData.length;i++){
        if(login_obj.email==signupData[i].email && login_obj.password==signupData[i].password){
           flag =true
        }
    }

    if(flag==true){
        console.log("login")
    }else{
        console.log("failed")
    }

}