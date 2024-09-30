let form = document.querySelector("form");

form.addEventListener("submit", getData);

let signup_arr = JSON.parse(localStorage.getItem("signup_data"))

function getData(event) {
  event.preventDefault();

  // console.log(event)

  let login_obj = {
    email: form.email.value,
    password: form.password.value,
  };

  let data = false

  signup_arr.forEach((el)=>{
        //  console.log(el)
        if(el.email == login_obj.email && el.password == login_obj.password){
            // alert("login successful")
            data = true;

        }
  })

  if(data == true){
     alert("login successful");
  }else{
    alert("login failed")
  }



// console.log(login_obj)






}
