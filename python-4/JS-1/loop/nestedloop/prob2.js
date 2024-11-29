// Father has asked his son to plant 5 seeds in 10 farms

// for (let farm = 1; farm <= 10; farm++) {
//   console.log("farm no", farm);
//   for (let seed = 1; seed <= 5; seed++) {
//     console.log("seed no", "*")
//   }
// }


// Father is basically asking his son to plant 5 seeds in 5 farm but in horizontal fashion.

// for (let farm = 1; farm <= 10; farm++) {
//   console.log("farm no", farm);
//    let bag = "";
//   for (let seed = 1; seed <= 5; seed++) {
   
//     bag += " *" 

//     console.log(bag);
//   }
  
// }


// Father is asking his son to plant seeds, with the following commands
// 1 ==> *
// 2 ==> **
// 3 ==> ***
// 4 ==> ****
// 5 ==> *****


// for (let farm = 1; farm <= 5; farm++) {
//   console.log("farm no", farm);
//   let bag = "";
//   for (let seed = 1; seed <= farm; seed++) {
//     bag += " *";
//   }
//   console.log(bag);
// }





/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/



// for(let i = 5;i>=1;i--){
//     // console.log(i)
//     let res = ""
//     for(let j = 1;j<=i;j++){
//         // console.log(j)
//         res = res + j + " "
//     }
//     console.log(res)
// }



// break and continue

for(let i = 1;i<=5;i++){
    if(i==3){
        continue
    }
    console.log(i)
}
