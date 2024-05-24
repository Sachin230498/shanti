//What is Inheritance

// A human gets access to properties and methods of other human.

// In Js this applies to object

//We can use Js inheritance in two ways:

// 1 Constructor function
// 2 Object.create() method


// let str = "dfsfs"
// console.log(typeof str);


// let object = {
//   name:"adas"
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// //  arr.push(9)
// //console.log(typeof arr)
// console.log("arr", arr);


 //tiger, lion, leopard, cat

// let cat = {
//   type: 'cat',
//   legs: 4,
//   tail: true,
// };

// let tiger = {
//   speed: 70,
//   type: 'cat',
//   legs: 4,
//   tail: true,
// };

// let lion = {
//   speed: 60,
//   type: 'cat',
//   legs: 4,
//   tail: true,
// };

// console.log('lion:', lion);


 // inheritance using  Object.create() method

let cat = {
  type: 'cat',
  legs: 4,
  tail: true,
};


let tiger = Object.create(cat);
//console.log("tiger", tiger);

tiger.speed = 80
//console.log("tiger",tiger);



let leopard = Object.create(cat)
//console.log("leopard", leopard);










 let lion = Object.create(cat);
//console.log(lion);
lion.speed = 60;

 //console.log('lion:', lion);

 //console.log('lion:', lion);

// //fact - object.create() stores the parent properties in [[prototype]] OBJECT




//create a crushit Student Database using Object.create()




let student = {
  batch: '3to5',
  track: 'Javascript',
  Instructor: 'Ravi',
  Unit: 2,
};

let s1 = Object.create(student);
//console.log(s1);

s1.name = "Rahul"
//console.log(s1);

//form on a webpage

// let students = []

// function createStudents() {

//   let s1 = Object.create(crusit_student);
//   s1.name = form.name.value
//   students.push(s1)

// }

// s1.name = 'Swanand';

// let s2 = Object.create(crusit_student);
// s2.name = 'abhi';

// let s3 = Object.create(crusit_student);
// s3.name = 'venu';

// let s3 = Object.create(crusit_student);
// s3.name = 'sakshi';

// console.log('s3:', s3);


//Why its called prototype inheritance
//we implement inheritance in js using object



//Inheritance using Constructor Function
//CF returns what? objects

function nikeProduct(n,p) {
  this.name = n;
  this.price = p;
}

let nike = new nikeProduct("run",2500)
//console.log(nike);

  nikeProduct.prototype.brand = 'adidas';
  nikeProduct.prototype.logo = "nike"
  nikeProduct.prototype.abc = "nikeabc"

 let n1 = new nikeProduct("zoom", 3000);
 console.log(n1);
 
// let n2 = new nikeProduct('zoom', 999);
// console.log(n2);

// console.log(nikeProduct.prototype.logo = "ddd");
// console.log(n2);
// let n3 = new nikeProduct('jordans', 9999);
// let n4 = new nikeProduct('jordans', 9999);

//console.log(n1, n1.sale());

// let arr = [1, 2, 3];

// // arr.push(4);


// let str = 'raju'; //YOU

// let str2 = new String('raju'); //JAVASCRIPT
// console.log('str2:', str2);


// // str.charAt(0)

// //arr is an object
// //str is an object

// //.filter, .pop, .toUppercase, .map

// //Object

// console.log(console);

//create custom array methods

// let arr = [1, 2, 3];
// let arr = []
// console.log(arr);
 


//this is how JS does it
// let arr2 = new Array(1, 2, 3);

 let hobbies = ["footnball", "coding"];
//we are going to hack js

//what is Array - CF

Array.prototype.नमस्ते = function () {
  //console.log("Hello from WEB 20");
};

// hobbies.नमस्ते()

Array.prototype.भेजो = function (value) {
  //where
  // this.push(value)

  //index & value

  let index = this.length;
  this[index] = value;
};

//forEach - for loop

// arr2.भेजो(5);
// arr2.भेजो(7);

//console.log("arr2:", arr2);

//console.log('arr2:', arr2);



let arr = [2, 3, 4]
let b =arr.map(function (el) {
   return el*2
})

//console.log(arr);


// Higher-order functions example
// const double = x => x * 2;
// const triple = x => x * 3;
// const applyOperation = (value, operation) => operation(value);
// console.log(applyOperation(5, double)); // 10
// // console.log(applyOperation(5, triple)); // 15


function createCounter() {
    let count = 0; // Private variable

    function increment() {
        count++; // Private method
    }

    function getCount() {
        return count; // Private method
    }

    return {
        increment: increment, // Public method
        getCount: getCount // Public method
    };
}

let counter = createCounter();
console.log(counter.getCount()); // Output: 0
counter.increment();
console.log(counter.getCount()); // Output: 1


// myModule.js
export const sayHello = () => {
    console.log('Hello');
};

