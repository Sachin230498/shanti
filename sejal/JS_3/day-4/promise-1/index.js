//Stats of 10th standerd - promis made

//promise is in process
//finally promise end

//1 promise is fulfilled( ps5 )
//2 promis is failed (chappal)
//3 promise is pending

//when you make a promise ,it takes times
//promise will return a value after some time

//waiting while promise is process

//promise should not have blocking behaviour

//network request

//instagram
//scrolling insta feed -start loading
//uploading ................    pending
//uploaded         fulfillment
//failed           rejection

//settimeout to mimick a delay in promise

//promise
//user visit websites
//we are getting data,wait, show loading img
//after 4 or 5 second you will get data replace the loading img with another img

//promise will take a callback function that will take two arguments
// resolve and reject

// Array.forEach(function (el,inder) {

// })
let data = false;


let promise = new Promise(function (resolve, reject) {
  if (data) {
    resolve("Data get")
  }
  else (
    reject("Error getting data")
  )
})


promise.then(function (res) {
  console.log(res, "success");
})

promise.catch(function (err) { 
  console.log(err, "error");
})


console.log(promise);

















//Phonepe UI screen

//create a basic UI
//you enter a password
//bank verifies your password,balance

// setTimeout(() => {

//     if (password === 1234) {
//       resolve("correct password")
//     }

// }, timeout);

// mypromise.finally(function () {
//     console.log("run");
// })

//try with async await

// Using async/await with promises
// async function fetchData() {
//   try {
//     let data = await new Promise(function(resolve, reject) {
//       setTimeout(() => {
//         const isDataAvailable = getData();
//         if (isDataAvailable) {
//           resolve("Sweets");
//         } else {
//           reject("Chappal");
//         }
//       }, 3000);
//     });

//     console.log("Data fetched:", data);
//     img.src = "https://gifdb.com/images/high/yes-cute-baby-fist-hand-9ui3p4n0tfvw7dhv.gif";
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetch();

// let mypro = new Promise((resolve, reject) => {
//   let age = 8;
//   if (age >= 18) {
//      resolve("age is equal")
//   } else {
//    reject("age is less than 18")
//   }
// })

// //console.log(mypro);

// mypro.then((res) => {
//   console.log(res,"Successfully fetched");
// })


// prp.then(function (res) {
//   console.log("res",res);
// })

// prp.catch(function (err) {
//   console.log("err",err);
// })







