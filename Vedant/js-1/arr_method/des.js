// let arr = [12,54,6,"abc", 123]

// // destructuring

// let [a,b,c,d,e] = arr

// console.log(a)



let obj = {
  name: "Ram",
  age: 20,
  rollNo: 12,
  location: "Indore",
  marks: {
    english: 80,
    maths: 75,
    science: 90,
    socialStudies: 85,
    computer: [12, 56, 88],
  },
//   hobbies: ["coding", "backing", "graphic", "Reading"],
};

let {name,age,rollNo,location,marks:{computer}} = obj

console.log(computer)

