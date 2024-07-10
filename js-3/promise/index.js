let a = 5


function pro(){
let promise = new Promise(function(resolve,reject){
   
    if(a == 5){
        resolve("Promise resolved")
    }
    else{
        reject("Promise rejected")
    }
})



// console.log(promise);


promise.then(function(res){
   console.log("resolved",res)
})

promise.catch(function(err){
  console.log("error",err)
})




}






setTimeout(pro,3000)


