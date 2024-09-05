// Chunnu is taking two numbers and adding them, then munnu is taking the answer from chunnu and multiplying it with 5, then aman is taking the answer from munnu and find the exponentitaion of it with a number 3, then rahul will print the final answer after multiplying it with 10.

function chunnu(a, b) {
  return a + b;
}

function munnu(z) {
  return z * 5;
}

function aman(x) {
  return x ** 3;
}

//50*50*50

function rahul(y) {
  return y * 10;
}


let step1 = chunnu(5,5);  // 10
let step2 = munnu(step1); // 10 * 5 = 50
let step3 = aman(step2);  // 50*50*50 = 125000
let final = rahul(step3) // 125000*10 = 1250000

console.log(final)
