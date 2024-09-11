// asynchronous and synchronous

// console.log("hello")
// console.log("hello1")
// console.log("hello2")


// asynchronous

// settimeout(function, time(ms))
// setInterval(function, time(ms))
// clearInterval(id)


let counter = document.getElementById("counter");
let val = 0

function data(){
    counter.innerText = val
    val++;
    // console.log("data-1")

}

// data()



// setTimeout(data, 2000)

let id =  setInterval(data,1000)


function play(){
    setInterval(data, 1000);
}

function stop(){
  clearInterval(id)
}