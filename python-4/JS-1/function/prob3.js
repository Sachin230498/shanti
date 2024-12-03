//SUPERMAN: He is planning to add two number and give the answer to batman.

//BATMAN: Batman is planning to take the superman's answer and square it, then give it to shaktimaan

// SHAKTIMAAN: He will just subtract 50 from it and give the answer to villian


function superman(a,b){
    let add = a+b
    return add;
}


function batman(x){
    let sq = x**2;
    return sq
}


function shaktimaan(y){
   let diff = y- 50
   return diff;
}



let step1= superman(20,40)  //60

let step2 = batman(step1)  //60**2 = 3600
 
let villian=  shaktimaan(step2)  //3600-50


console.log("I am sparing your lives", villian)
