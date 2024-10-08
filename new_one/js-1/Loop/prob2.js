// While loop

// syntex   

// initilize 
//  while(condition) { code   iteration }

// let a = 1;

// while(a<=10){
//     console.log(a);
//     a++;
// }


let a = 1;
let sum = 0;
let odd = 0

while(a<=20){
 
if(a%2==0){ 
    sum = sum +a
}else{
    odd = odd+a;
}
a++
}

console.log("Even no ", sum);
console.log("odd no ", odd);
