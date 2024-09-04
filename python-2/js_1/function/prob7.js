// Create a function to check if a number is Prime or Not


function check_prime(a){
 let fact = 0;
    for(let i=1;i<=a;i++){
        // console.log(i)
        if(a%i==0){
           fact++;
        }
        //4%1==0 fact = 1
        //4%2==0 fact = 2
        //4%3==0 fact = 2
        //4%4==0 fact = 3
    }

    if(fact == 2){
        console.log("prime")
    }else{
        console.log("not prime")
    }

}





check_prime(15)