

let emp = {
    company:"Shanti",
    salary:"4LPA",
    designation:"Developer"
}

// let emp1 = {
//     company:"Shanti",
//     salary:"4LPA",
//     designation:"Developer",
//     name:"Nivesh"
// }

// let emp2 = {
//   company: "Shanti",
//   salary: "4LPA",
//   designation: "Developer",
//   name: "Rani",
// };

let data = {
    abc:"xyz"
}

// let emp3 = {
//   company: "Shanti",
//   salary: "4LPA",
//   designation: "Developer",
//   name: "Abhisek",
// };


let emp1 = Object.create(emp)
//   console.log(emp1)


emp1.name = Object.create(data)

console.log(emp1.name.abc)


// let obj = {}
// obj.name = "abc"







