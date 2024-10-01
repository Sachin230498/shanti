/*

**********
*        *
*        *
*        *
*        *
*        *
*        *
*        *
*        *
**********

*/

//step2: Print the below pattern for 10 times
for (let i = 1; i <= 10; i++) {
  //step1: Print star in 1 line
  let bag = "";
  for (let j = 1; j <= 10; j++) {
    if (i == 1 || i == 10) {
      bag = bag + "*";
    } else {
      if (j == 1 || j == 10) {
        bag = bag + "*";
      } else {
        bag = bag + " ";
      }
    }
  }
  console.log(bag);
}
