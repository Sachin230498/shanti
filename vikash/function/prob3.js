// check if the number is prime no

function prime(a){
    let fact = 0;
    for(let i =1;i<=a;i++){
        // console.log(i)
        if(a%i==0){
          fact++
        }
        //5%1==0  fact = 1
        //5%2==0  fact =1
        //5%5==0  fact =2
    }

    if(fact==2){
        console.log(a, "is prime no")
    }else{
        console.log(a, "is not a prime no")
    }

}

prime(5)  // 1 5
 prime(6) // 1 2 3 6



