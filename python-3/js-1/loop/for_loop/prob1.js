// for loop 

//syntex
// for(initilize,condition,iteration){ code }

// let bag = 0;

// for(let i = 1;i<=10;i++){
//     // console.log(i)
//     if(i%2==0){
//         bag = bag + i;
//         console.log(bag)
//     }
// }


let bag = "";

for(let i =1;i<=5;i++){
    // console.log(i)
    bag = bag + " "+ i ; 
}
//   console.log(bag);

//bag = "" + 1  => "1"
//bag = "1"+ 2  => "12"



// let a = 10;
// let b = 20;

// let x = "ab";
// let y = "cd";
// let c = "30"

// console.log(a+c)  // 10 + "30"

// console.log(x+y) //concatination









for(let i =1 ;i <=20;i++){
    // console.log(i)
    if(i ==11){
        continue;
    }
    if(i ==12){
        continue;
    }
    if(i ==14){
        break;
    }
    console.log(i)
}





