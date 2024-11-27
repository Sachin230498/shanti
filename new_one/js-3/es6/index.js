const arr = ["Rohan", 12, true, "MJ", 85];


// console.log(arr[2])


// const [e,a,b,c,d] = arr

// console.log(a,b,c,d,e)


let obj = {
    name:"rahul",
    age:22,
    marks:85,
    sub:{english:22,maths:85,physics:88}
}

const {name,age,marks,sub:{english,maths,physics}} = obj;

console.log(maths)

