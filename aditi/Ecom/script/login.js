let form = document.querySelector("form");

form.addEventListener("submit", getData);

let signup_arr = JSON.parse(localStorage.getItem("signup_data"));

function getData(event) {
  event.preventDefault();

  // console.log(event)

  let login_obj = {
    email: form.email.value,
    password: form.password.value,
  };

  let data = false;

  signup_arr.forEach((el) => {
    //  console.log(el)
    if (el.email == login_obj.email) {
      if (el.password == login_obj.password) {
        data = true;
        localStorage.setItem("login_user",JSON.stringify(el))
      } else {
        data = "wrong";
      }
    }
  });

  if (data == true) {
    alert("login successful");
    window.location.href = "../Html/index.html";

  } else if (data == "wrong") {
    alert("wrong Passwrod");
  } else {
    alert("wrong credential");
  }

  // console.log(login_obj)
}
