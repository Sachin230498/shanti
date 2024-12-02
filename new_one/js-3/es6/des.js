const arr = ["Rohan", 12, true, "MJ", 85];


// console.log(arr[2])

// const [a,b,c,d,e] = arr

// console.log(e,a)


let obj = {
    name:"rahul",
    age:22,
    marks:85,
    sub:{english:22,maths:85,physics:88},
    marks2:[85,77,123,789,456]
}

const {name,age,marks,sub,marks2:[a,b,c,d,e]} = obj;

// console.log(a)

