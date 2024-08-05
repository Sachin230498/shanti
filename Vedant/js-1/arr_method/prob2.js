// forEach map sort filter slice splice 

// foreach it is using for iteration, it is same like loop but its not return new array
// take callback function and that callback function take 3 parameter element index array
let arr = [1,28,6,9,5,689]


let a = arr.forEach(function(el,index,array){
    // console.log(el)
    // console.log(array)
    return el*2
})

console.log(a)


// map it is using for iteration, it is same like loop and it return new array
// take callback function and that callback function take 3 parameter element index array

let b = arr.map(function (el, index, array) {
  // console.log(el)
  // console.log(array)
  return el * 2;
});

console.log(b);









