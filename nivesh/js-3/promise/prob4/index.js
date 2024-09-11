let btn = document.querySelector("button")
let input = document.querySelector("input")
let img = document.querySelector("img")

btn.addEventListener("click", add)


 let password = 1234

// function subfun(){
//  if(password==input.value){
//     // console.log("correct")
//     img.src =  "https://i.pinimg.com/originals/e7/5e/83/e75e8379ccc3f74cbe39356c4b6784da.gif";
//  }

// }


function subfun(){
    let promise = new Promise(function(res,rej){
      if(password==input.value){
        res("success")
      }else{
       rej("failed")
      }
    })

    // console.log(promise)

    promise.then(function(){
         img.src =
           "https://i.pinimg.com/originals/e7/5e/83/e75e8379ccc3f74cbe39356c4b6784da.gif";
    }).catch(function(){
         img.src =
           "https://www.icegif.com/wp-content/uploads/fail-icegif-8.gif";
    }) 
}


function add(){

setTimeout(subfun,2000)

}