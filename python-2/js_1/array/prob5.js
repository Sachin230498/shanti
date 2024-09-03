//  let arr = [1,5,7,8,9,0]

// // print first half of the array

// let start = 0;
// let end  = (arr.length/2) -1;

// for(let i = start;i<= end;i++){
//     console.log(arr[i])
// }


 let arr = [1, 5, 7, 8, 9, 10];
 let evensum = 0
 let oddsum = 0

 for(let i =0;i<arr.length;i++){
    // console.log(arr[i])
    if(arr[i]%2==0){
    evensum = evensum + arr[i]
     
        // console.log("even no" ,arr[i])
    }else{
        oddsum = oddsum+arr[i]
        // console.log("odd no" ,arr[i])
    }
 }
console.log(evensum)

console.log(oddsum)

