// Father is basically asking his son to plant 5 seeds in 5 farm but in horizontal fashion.


//seb problem 2: Plnat the sedds in 5 farms
for (let farm = 1; farm <= 5; farm++) {
    let bag = "";
 
//   console.log("farm no.", farm);
  for (let seed = 1; seed <= farm; seed++) {
    // console.log("*");
    bag = bag + " " +seed 
   
  }
   console.log(bag);
}


