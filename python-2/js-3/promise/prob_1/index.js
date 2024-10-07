// Constructor


// // function nike(){
// //     let obj = {};

// //     obj.name ="Run",
// //     obj.price = 20000

// //     return obj;

// // }


// // let a = nike()
// // console.log(a)


function Nike(a,b){
    //this = {}

    this.name = a
    this.price = b 

    // return this

}


// let a  = new Nike("run", 2000);
// let b  = new Nike("run1", 3000);
// let c  = new Nike("run2", 4000);
// console.log(a)
// console.log(b)
// console.log(c)


// // this  = object
// // new = return


// let arr =  new String()

// console.log(arr)



// promise 
// Pending  fullfilled Reject

// let nam = "Mohn"


// function promisefun(){

// let promise = new Promise(function(res,rej){
//     if(nam == "Mohan"){
//         res("success")
//     }else{
//         rej("error in fatching")
//     }
// })

// promise.then(function(res){
//     console.log(res)
// })
// promise.catch(function(rej){
//     console.log(rej)
// })

// console.log(promise);

// }


// .then & .catch

// setTimeout(function, time(ms))

// setTimeout(promisefun, 2000)





let input = document.getElementById("input")

let password = "123321"

let img = document.getElementById("img");

function submitData(){
let promise = new Promise(function(res,rej){

     if (password == input.value) {
        res("get it")
     }
     else{
        rej("error")
     }
})
// console.log(promise)

promise.then(function(res){
    img.src =
      "https://media3.giphy.com/media/Q81NcsY6YxK7jxnr4v/giphy.gif?cid=6c09b9522mkl6yw0d3cdvlafa1j8ve7rcqfs6mowe0dss144&ep=v1_gifs_search&rid=giphy.gif&ct=g"; 
})

promise.catch(function(err){
    img.src = "https://media.tenor.com/U5hmONvZGo8AAAAM/mmt-error-error.gif";
})



}



function abc(){
setTimeout(submitData, 2000)

}

