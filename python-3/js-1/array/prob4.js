

// arr.push(12,55,69)

// // console.log(arr)

// arr.pop()

// arr.shift()
// arr.unshift(5,8)
// console.log(arr)


let arr = [2, 3, 6, 12, 89 , 63];

// // map foreach splice slice sort

// let x =  arr.map(function(el,index,array){
// // console.log(el ,index)
// // console.log(array)
//    return el*2
//  })

//  console.log(x)


 let y = arr.forEach(function (el, index, array) {
    // console.log(el ,index)
//    console.log(array)
   return el * 2;
 });

console.log(y);


//  for(let i =0 ;i<arr.length;i++){
//     console.log(arr)
//  }