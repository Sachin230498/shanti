// Promise 


// Pending
// Resolve
// Reject


function getData(){
  let data = false;

  let promise = new Promise(function (res, rej) {
    // data = true
    if (data) {
      res("completed");
    } else {
      rej("error in promise");
    }
  });

//   console.log(promise)


// .then()  .catch


promise.then(function(res){
  console.log("resolve", res)
}).catch(function(err){
    console.log("error",err)
})






}




setTimeout(getData, 2000)