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
        if(obj.email == signup_arr[i].email && obj.password == signup_arr[i].password){
            // alert("login")
            flag = true
        }
    }


    if(flag == true){
        alert("login")
    }else{
        alert("login failed")
    }





    // console.log(name,email,password)
}