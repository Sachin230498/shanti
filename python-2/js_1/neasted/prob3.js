// Father is asking his son to plant seeds, with the following commands
// 1 ==> *
// 2 ==> **
// 3 ==> ***
// 4 ==> ****
// 5 ==> *****



for (let i = 1; i <= 5; i++) {
//   console.log("farm no", i);
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag = bag + " *";
   
  }
     console.log(bag);

}
