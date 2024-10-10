// for loop

// syntex 
// for(initilization, condition, iteration){ code }


for(let i =1; i<=5 ; i++){
    // console.log(i)
}



// print the sum of even no and odd no from 1 to 20
// print the avareger of that even no and odd numbers

let even_sum = 0;
let odd_sum = 0;
let even_no = 0;
let odd_no = 0;

for(let i =1;i<=10;i++){
    if(i%2==0){
        even_sum = even_sum + i  
         even_no++;
     }
    else{
      odd_sum = odd_sum+i
      odd_no++;
    }
   
}


//  console.log("avarage of even no" ,even_sum/even_no);
//  console.log(even_no)
//  console.log("avg of odd no",odd_sum/odd_no)



// 2 4 6 8 10  30/5 = 6

//3+3+6 = 12/3 = 4



let bag = "";


for(let i = 1;i<=5;i++){
   
    bag = bag + i + " ";
    //bag = "" + 1 = "1"
    //bag = "1"+ 2 = "12"
    //bag = "12"+ 3 = "123"
   
}

 console.log(bag);



