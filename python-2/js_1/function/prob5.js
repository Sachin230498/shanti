// Superman: He is planning to add two numbers and give the answer to batman

// batman: Batman is planning to take the superman's answer and square it, then give to shaktiman

// Shaktiman: he will just subtract 50 from it and give the answer to villian


function superman(a,b){
    let add = a+b;
    return add  
}

function batman(x){
    let sq = x**2
    return sq
}

function shaktiman(y){
    let diff = y-50;
    return diff
}


let step1 = superman(10,50);
let step2 = batman(step1)
let villian = shaktiman(step2)


console.log(villian)