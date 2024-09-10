// Promise 



// How to create promise

// promise is constructor 
// promise will take time

let data = true;

let promise =  new Promise(function(res,rej){
    // data = false
    if(data){
     res("Success");
    }else{
        rej("failed promise")
    } 
})
// console.log(promise)

// .then .catch

promise.then(function(a){
    console.log("resolve", a)
}).catch(function(b){
    console.log("error", b)
})


