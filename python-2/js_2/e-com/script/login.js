let form = document.querySelector("form")


form.addEventListener("submit", getData)

let signup_arr = JSON.parse(localStorage.getItem("signupData")) || []
// console.log(signup_arr)

function getData(){
    event.preventDefault()
    // console.log("hello")

    let email = form.email.value;
    let password = form.password.value;

    let obj = {
        email:email,
        password:password
    }

    // console.log(obj)

    let flag = false;

    for(let i =0;i<signup_arr.length;i++){
        // console.log(signup_arr[i])
        if(obj.email == signup_arr[i].email){
            if(obj.password == signup_arr[i].password){
                localStorage.setItem("login_user", JSON.stringify(signup_arr[i]))
               flag = true;
            }else{
                flag = "wrong"
            }
            // alert("login")
           
        }
    }


    if(flag == true){
        alert("login")
        window.location.href = "../html/index.html";
    }else if(flag == "wrong"){
    alert("wrong password")
    }else{
            alert("login failed");
    }





    // console.log(name,email,password)
}