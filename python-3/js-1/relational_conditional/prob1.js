// relational Operator   < > <= >= == != === !==
//always gives output as boolean

let a = 10;
let b = 15;
let c = 10;
let d = "15"

let x = a<c;

let y = b==d   // 15 == "15"

// == only check the value not the data type

let z = b === d 

// === It will check both value and data type

// console.log(z)


//  && and ||



let nam = "Rahul";
let nam2 = "abc"

let ab =   nam == "Rahul"  || nam2 == "xyz"
// && will check all the condtion is true or not if there is any conditon is false it will return false
//  || ,with this operator if there is only one condition is true it will return true 
console.log(ab)

