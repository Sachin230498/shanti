// let arr = [12,12,56,45]

// let marks = [45,68,75,50,80]
//marks[0]

let obj = {
    name: "Ram",
    age: 20,
    rollNo: 12,
    location:"Indore",
    marks: {
        english: 80,
        maths: 75,
        science: 90,
        socialStudies: 85,
        computer: [12,56,88]
    },
    hobbies: ["coding","backing","graphic","Reading"]
}

// console.log(obj)

// Bracket notation
// key always should be string
let a = obj["name"]
let age = obj["age"]
let mark = obj["marks"]["computer"][0]

let c = obj["hobbies"][1]

// console.log(mark)

// Dot notation

let rollno = obj.rollNo

// console.log(rollno)

let location = obj.location
console.log(location)


let socail = obj.marks.computer[0]
console.log(socail)
