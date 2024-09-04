// Write a function to check if the char is a small case or not

function check(a){
let lower = "abcdefghijklmnopqrstuvwxyz";
let isPresent = false
for(let i=0;i<=lower.length;i++){
    if(a == lower[i]){
       isPresent = true
    }
}

if(isPresent == true){
    console.log("it is a lower case")
}else{
    console.log("uppercase")
}
}


check("F")



