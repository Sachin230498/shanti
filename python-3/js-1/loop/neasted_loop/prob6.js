//Problem 2: Print Prime Numbers from 1 to given limit

// Prime numbers have only two factors, and 1 is not a prime number, It is a co prime number

//to check the prime number i will count the number of factors

for (let j = 1; j <= 10; j++) {
  let factor = 0;
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) {
      factor++;
    }
  }
  if (factor == 2) {
    console.log(j, "is prime");
  } else {
    console.log(j, " is not a prime number");
  }
}
