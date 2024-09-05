//Problem 3 : Given an array of numbers find the average of all the even numbers.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//sum?
//count?

// let sum =0;
// let osum =0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         sum=sum+arr[i]
//         // console.log("even no",arr[i])
//     }else{
//     osum+=arr[i]
//     }
      

    
 
// }
// console.log(osum)
//  console.log(sum);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// totle/no 20/4 = 5


let sum =0;
let c = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        c++;
        sum=sum+arr[i]
    } 
}


console.log(sum/c)

