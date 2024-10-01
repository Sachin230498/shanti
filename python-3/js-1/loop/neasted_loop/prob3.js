// Example2: There is a father and son duo, they owns 5 farms, Father asked the son to plant 10 seeds in each farm.

//seb problem 2: Plnat the sedds in 5 farms
for (let farm = 1; farm <= 5; farm++) {
  //sub problem 1: Planting 10 seeds
  console.log("farm no.", farm);
  for (let seed = 1; seed <= farm; seed++) {
    console.log("*");
  }
}


