// filter method in js creates a new arrat with all the el that pass the test implemented by the provided callback function


// arr.filter(callback(element,index,array))

let numbers = [1,2,3,5,7,8,91,0,12,45,88]

let even =numbers.filter(function(el){
    return el%2==0
})

// console.log(even)


let people = [
    {name:"john",age:20},
    {name:"jane",age:25},
    {name:"jim",age:30},
    {name:"jake",age:15},
    {name:"jimmy",age:17},
]

let age = people.filter(function(el){
    // console.log(el.age)
    if(el.age>=18){
        console.log(el.name)
    }
})




