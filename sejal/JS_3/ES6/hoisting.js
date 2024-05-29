// let vs const vs var
//hoisting ==> Hoisting is default behaviour of Js where the varible or function declarations are appered
// to the top of the scope


 console.log(nam);

 var nam //declare
// console.log(nam);


// add();

// function add() {
//     console.log("add");
// }

// add();


// var

 //var nam = "Rahul";  // declare and assign

//nam = "Hari"   // reassign

 //var nam = "Abc"  // redeclare
// console.log(nam);

//hoising in var


//console.log(score);

//var score;  //hoisiting are applicable in var

//es6 introduct let and const




//let a //whenever you are not assigning the value to varible in let and var you got undefined
// console.log(a);

//a = "hello";  // assign
// console.log(a);

//a = "world"; // reassign
//console.log(a);

//let a = "hello world"; //you cant redeclare in let
//when you are redeclare in let you get SyntaxError: Identifier 'varible' has already been declared
//console.log(a);

//console.log(b); //ReferenceError: Cannot access 'b' before initialization
//let b;  // hoising in let is not applicable


//const == constant

//const c; // whenever you declare a constant varible you have to also assign the value
// console.log(c);  //SyntaxError:missing initializer in const declaration

//console.log(c); //hoisitng is not applicable
 //ReferenceError: Cannot access 'c' before initialization

const c = "hello world";
// console.log(c);

//c = "hello ";  //you cannot reassign in const declaration
//console.log(c);  //TypeError: Assignment to constant variable.

//const c = "ggg"
//console.log(c);  //SyntaxError: Identifier 'c' has already been declared
// you also redeclare in const declaration









