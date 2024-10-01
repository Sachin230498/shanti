// Gol gappa Example

//Day 2: Ajay went to eat gol gappas with his family, he has 4 family members
for (let family = 1; family <= 4; family++) {
  //Day 1: Ajay went to eat gol gappas, he wants     to eat 10 gol gappas
  for (let gol_gappa = 1; gol_gappa <= 5; gol_gappa++) {
    console.log("Family member", family, "Eating", gol_gappa, "gol gappa");
  }
  console.log("********************");
}

// I can say that the inner loop is basically responsible for printing the statemnet 10 times. But the outer loop is responsible for running the inner loop 4 times.
