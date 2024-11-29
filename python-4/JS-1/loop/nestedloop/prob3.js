// print calender formats dates and months

// 


//Problem 2: Print Prime Numbers from 1 to given limit

for(let i=1;i<=10;i++){
   let fact = 0
    for(let j=1;j<=i;j++){
    if(i%j==0){
     fact ++;
    }
}

// console.log("i's value", i, "factor", fact)

if(fact == 2){
    console.log(i, "is prime no")
}else{
    console.log(i, "in not a prime no")
}
}


// i = 1
//  j =1 1<=1 
// 1%1 ==0 


// i = 2
// j = 1 1<=2
// 2%1==0

// j =2 2<=2
// 2%2 == 0







