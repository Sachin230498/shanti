// console.log("Hello world!");

//asynchronous javascript
// settimeout
// setInterval
// clearInterval

// setTimeout(function, time);


setTimeout(function(){
    console.log("Hello world! 1");
}, 1000);


function hel3(){
console.log("Hello world! 3");
}


function hel2(){
console.log("Hello world! 2");
}


setTimeout(hel3, 3000)
setTimeout(hel2, 2000)
