let arr = [1,2,3,4,5,6]

// array methods forEach map sort filter splice reduce slice 

// Foreach and map

// let a = arr.forEach(function(el){
//     // console.log(el, index)
//     // console.log(array)
//     if(el%2==0){
//         return el
//     }
// })

// console.log(a)

let c =  arr.map(function(el){
       
            return el*2
        
  
})

//  console.log("even no", c)



let d =  arr.forEach(function(el){
        return el
  
})

// console.log(d)


let e = arr.filter(function(el){
      if(el%2==0){
        return el
      }
})

let f = arr.filter(function(el){ // parameter el index array
      if(el>5){
        return el
      }
})

// console.log(f)


//Sort Method => 
let arr2 = [7,1,2,4,6,8,3,45,11,58,36];

// when there is 2 digit or multiple digit no so we have to use this methods
let sorta = arr2.sort(function(a,b){  
    return a-b
})
let sortb = arr2.sort(function(a,b){
    return b-a
})

// console.log(sortb)


// Splice => using deleting el and adding element

let arr3 = [1,2,3,4,5,6]

//splice(index, no of el want to delete, add el)

// let spl = arr3.splice(2,2)

// arr3.splice(0,2,12,456,888)

// console.log(arr3)


let arr4 = [1,2,3,4,5,7,8,5,25,67,11]

let a = arr4.slice(2,5)

let b = arr4.slice(-5, -2)
let x = arr4.slice(4, -2)

// console.log(x)

let y = arr4.reverse()
console.log(y)