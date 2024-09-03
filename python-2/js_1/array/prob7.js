// Array Methods

// forEach
// map
// filter
// sort
// reverse


let arr = [1,3,5,7,4,2,8,12,16]


//syntex forEach(callbackfn(el,index,array){code})


let a = arr.forEach(function (el,index){
    // console.log(el, index)
  return el, index
})

console.log(a)


//syntex map(callbackfn(el,index,array){code})

let b = arr.map(function (el, index) {
  return el
});

console.log(b)






// function add(a,b){



// console.log(a+b)

// }


//  add(5,6)