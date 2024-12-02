// syntex

// for(intilize, condition, iteration){code}

// print from 1 to 10
// let sum = 0;
// for(let i=1;i<=5;i++){
//     sum = sum+i

// }
//   console.log(sum);


// print from 1 to 20 and find out the avg of sum of even and sum of odd num  

let esum = 0;
let osum = 0;

let ecount = 0
let ocount = 0

for(let i=1;i<=10;i++){
    if(i%2==0){
        esum+=i
        ecount++;
      
    }else{
        osum+=i
        ocount++;
       
    }
}

console.log(esum/ecount)
console.log(osum/ocount)


//1 2 3 4 5 6 7 8 9 10
//even 2 4 6 8 10


// find the factorial of 5


// 5*4*3*2*1
let fact = 1;
for(let i =1;i<=5;i++){
  fact = fact*i  
}

// i =1 , fact = 1 *1
// i =2 , fact = 1 *2
// i =3 , fact = 2 *3
// i =4 , fact = 6 *4
// i =4 , fact = 24*5


// console.log(fact)

