// loop =>

// while loop

// while(condition){
// code
// itration          }

let a = 5;
while (a <= 10) {
   console.log(a)
  a++;
}

// even number from 1 to 20

//     let b = 1
// while(b<=20){
//     if(b%2==0){
//     console.log(b, "even number")
//     }else{
//         console.log(b, "odd number")
//     }
//   b++
// }

// find the sum of even num from 1 to 20

let b = 1;
let sum = 0;
while (b <= 20) {
  if (b % 2 == 0) {
    sum = sum + b;
  }

  b++;
}

// console.log(sum);

let x = 1;

let n = 5;
let f = 1;
while (x <= n) {
  // console.log(x)
  f = f * x;
  x++;
}

// console.log(f);

// 1 <=5 ,  f = 1 * 1 , f = 1
//  2 <=5 ,  f = 1 * 2, f = 2
//  3 <=5 ,  f = 2 * 3, f = 6
//  4 <=5 ,  f = 6 * 4, f = 24
//  5 <=5 ,  f = 24 * 5, f = 120




