let signupData = JSON.parse(localStorage.getItem("signup_data"));

let form = document.querySelector("form");

form.addEventListener("submit", getData);

function getData() {
  event.preventDefault();

  let data = {
    email: form.email.value,
    password: form.password.value,
  };

  let flag = false;

  signupData.map(function (el) {
    // console.log(el)
    if (el.email == data.email) {
      if (el.password == data.password) {
        flag = true;
        localStorage.setItem("login_data", JSON.stringify(el.name))
      } else {
        flag = "wrong";
      }
    }
  });

  if (flag==true) {
    alert("login");
     window.location.href = "../html/index.html";
  } else if (flag == "wrong") {
    alert("wrong password");
  } else {
    alert("login failed");
  }

  console.log(flag);
}
