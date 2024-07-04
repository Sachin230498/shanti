let signup_data = JSON.parse(localStorage.getItem('signup_arr')) || []

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
               localStorage.setItem(
                 "login_data",
                 JSON.stringify(signup_data[i])
               );
           break;
        }
     }   
 }

if(flag === true){
    alert("login successful");

    window.location = "./index.html";

 }else{
    alert("email or password incorrect")
 }
//console.log(email, password)
})





// function login(){
//     console.log("hello");
// }



// login();

// console.log(a)

// var a = 5 //declare + assigning  


//aper b ; 
// console.log(b);
// var b =5; //declare 




// function obj(){
//     // let obj = {}
//     // obj.name = "sachi";
//     //this = {}
//     this.name = "sachi";
//     this.age = 25;  
// }

// let user = new obj();
// console.log(user)

// let arr = [ 2,45,7,9]

// // let a = arr[1];  // 45
// // let b = arr[3];  // 9
// // let c = arr[0];  // 2

// const [prp, abc ] = arr;

// console.log(a,c)

// arr.forEach((el,index,array)=>{
//     return arr = arr[index]*el
// })

// console.log(arr)


// let obj = {
//      name:"sachin",
//      age:25,
//      address:{
//           city:"delhi",
//           state:"delhi"
//      }
     
// }

// const {name, address:{city}} = obj;



// console.log(city)
