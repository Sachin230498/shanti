// let arr = [45, 67, 99];

//  arr[4] = 56
//  arr[0] = 55

//  console.log(arr[3])



// let a ;

// // console.log(a)
// //js will assign undefined




let movies=["Bahubali","Avengers", "Pushpa", "KGF"];

// Print all the movies except Avengers


// for(let i=0; i<movies.length; i++){
//     if(movies[i]== "Avengers"){
//        continue
//     }
//        console.log(movies[i]);

// }



// let arr=[1,5,7,8,9,0];

// print the first of the array
//print last 2 products

// let start = 0;
// if(arr.length>=2){
//     start = arr.length-2;
// }


// for(let i=start;i<=arr.length-1;i++){
//     // console.log(arr[i]);
// }



//Problem 1 : Given an array print the position 
// (starting with 1) and the element in a single line.
let name=["Aman", "Ajay", "Varun", "Vijay"];

for(let i =0; i<name.length;i++){
//    console.log(i+1, name[i]) 
}


//Problem 3 : Given an array of numbers find the average of
// all the even numbers.

// let arr=[1,2,3,4,5,6,7,8,9];
// let sum =0;
// let count = 0;
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2==0){
//      sum += arr[i]
//      count++
//     }
// }

// console.log("Avarage is ", sum/count)



//Problem 2 : Given a character in lower case print the upper
// case character

let char="a";

//step1 Take a lower case array
let lower=["a","b","c","d","z"];

//step2 take an upper case array
let upper=["A", "B", "C", "D","Z"];


for(let i=0; i<lower.length;i++){
    if(lower[i]==char){
        console.log(upper[i]);
        break;
    }
}




