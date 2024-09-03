// for(intilize, condition, itration){ code }

// print the number from 1 to 10

for(let i=1;i<=10;i++ ){
    // console.log(i)
}


// horizental mennar 1 to 10

let bag = "";
for(let i =1;i<=10;i++){
    if(i%2==0){
        // console.log(i)
        bag = bag +" "+ i
    }
}

// console.log(bag)

//i = 0 
//i=2 ,  bag = "" + 2 , bag = "2"
//i=4    bag = "2" + 4 , bag = "24"
//246810


// print the sum of those numbers that are divisible by 2 and 5 bw 1 to 15

let sum = 0
for(let i =1;i<=15;i++){
    if(i%2==0 || i%5==0){
        // console.log(i)

        sum = sum +i;
    }
    // console.log(i)
}

// console.log(sum);


// factorial
//  5= 5*4*3*2*1*0

let fact = 1;
for(let i =1;i<=5;i++){
    // console.log(i)
    fact = fact*i;
}

console.log(fact);

