// object


let name = ["nivesh", "vikash", "abhi", "rani"];
let marks= [75,85,76,82]
marks[0]
let sub = ["english", "hindi", "Chemistry", "maths"]


// object = {key : value }

let details = {
    "name": "nivesh",
    "marks":75,
    "subject": "english"
}



// keys ==> name,marks,subject

//values ==> "Nivesh", 75 , english

// .length property will not work with objects

// Objects has no concept of index


// how to access el in object

let details1 = {
  name: "Aman",
  age: 45,
  location: "Manali",
  hobbies: "Graphic Novels",
};

// bracket notation


let a = details1["name"]
console.log(a)
// key should always in string


let loc = details1["location"]
console.log(loc)

// dot notation

let nam = details.name
console.log(nam)

let hob = details1.hobbies
console.log(hob)




