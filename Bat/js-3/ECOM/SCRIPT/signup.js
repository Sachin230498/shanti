let navbar = document.getElementById("navbar");
import nav from "../SCRIPT/nav.js";

nav(); // Call the navigation function

navbar.innerHTML = nav();


let signup_arr = [];


let form = document.querySelector("form");
form.addEventListener("submit", form_data);




function form_data(event) {
  event.preventDefault();

  // console.log("hello")

  let form_obj = {
    name: form.name.value,
    email: form.email.value,
    pass: form.pass.value,
  };

  signup_arr.push(form_obj);
  localStorage.setItem("signupData", JSON.stringify(signup_arr));
//   alert("signup successful");
//   window.location.href = "../HTML/login.html";
  // console.log(form_obj)
}

// let arr = [12, "dsdf", true, { name: "dfdf" }];
// console.log(arr);

// localStorage.setItem("arr",JSON.stringify( arr));

// let a = JSON.parse( localStorage.getItem("arr"));
// console.log(a)
