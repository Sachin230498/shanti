//noraml
// function abc() {
//     console.log("Hello world!");
// }

//arrow functiom  es6 syntex

// ()=> {
//     console.log("Hello world!");
// }

// let abc = () => {
//   //console.log("hello world!");
// };
// abc();

let plus = a => console.log(a+5);

 plus(5,10);

//there partheses () are somtimes optionals depanding on of arguments you have
// the curly brackets {} are also sometimes optional

// let a = (x) => {
//     console.log(x*2);
// }
// a(2)

//let a = x => console.log(x * 2)
// a(4)

 let elements = ["hydrogen", "helium", "Lithium", "Berllium"];

 let a, b, c, d;


// //this statement return the array
a = elements.map(function (el) {
  return el;
});
console.log(a);


//this is in arrow functions
// b = elements.map((el) => {
//   return el.length;
// });
//console.log(b);



//when there is only one parameter , we can remove the surrounding parenthese
// c = elements.map((el) => {
//   return el;
// });
//console.log(c);


//when the only statement in an arrow function is "return", so we can remove "return" and remove curly brackets
// d = elements.map(el =>  el.length );
//console.log(d);


//arrow function do not have their own "this"  keyword propert

// let obj = {
//     i: 10,
//     b: function () {
//         console.log("b fun",this.i,this);
//     }
// }

// obj.b()


//for of loop

//syntex
// for (varible of iterbale) {
//     code
// }

let cars = ["BMW", "Volvo", "Tata"]


for (let x of cars) {
   // console.log(x);
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let y of arr) { 
//   //console.log(y*2);
// }

let obj = {
  name: "robot",
  age: 30,
}



for (let key in obj) { 
  //console.log(obj[key]);
}

// destructuring
// Object and Array distructuring

let person = {}
person.name = "kartik"; 
person.id = "1",
person.location = "India"

//creating properties one by one
// console.log(person);
 
const nam = person.name
//console.log(nam);
const id1 = person.id
//console.log(id);
//extracting properties one by one

//creating multiple properties togather by using object literal notations

let person2 = {
  name: "Somya",
  id: "20",
  location: "India",
}  

let nam1 = person2.name
//console.log(nam1);


// destructuring allows us to extract multiple properties from an object

const { name, id, location } = person2
//console.log(name, id, location);



function getData() {
  let count = 5;
  let url = "ddsf"

  let obj = {
    count,
    url
  }
  return obj;
}

let { count, url } = getData();
// console.log(count,url);



//Array distructuring

//standerd way
let arr = ["crusIT", "Indore", "India"]
// let cnam = arr[0]
// let city = arr[1]
// let country = arr[2]

//es6 
var [cnam, city,country] = arr
//console.log(city,cnam,country);


let pp = {
  n: "swanand",
  s: "kadam",
  i: "abc"
}

// let { n: ppname, s: surnam, i: ppid } = pp
// console.log(ppname);




