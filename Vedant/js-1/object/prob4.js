// What is the frequency of each element of 
//the array

let arr = [7, 2, 7, 7, 3, 4, 2];
let obj = {};


for (let i = 0; i < arr.length; i++) {
  let char = arr[i];
  // console.log(char);

  if (obj[char] == undefined) {
    obj[char] = 1;
  } else {
    obj[char]++;
  }
}

console.log(obj)

