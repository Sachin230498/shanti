let arr = [2, 4, 6, 10, 11];

// map foreach filter sort splic slice

// foreach

// for(let i=0;i<arr.length;i++){
//     console.log(arr)
// }

// let a = arr.forEach(function (el, index, array) {
//            return el * 2;
// });

// console.log(a);

// let b = arr.map(function (el, index, array) {
//     return el*2
// });

// console.log(b);

let arr2 = [2, 4, 6, 8, 9, 3];
let str = ["mango", "papaya", "banana", "chiku"]

let x =  arr2.sort()

// str.sort()

// console.log(str)


let arr3 = [2, 4, 6, 8, 90, 30,44,12];

let y = arr3.sort(function (a, b) {
  return a-b;
});

console.log(y)
