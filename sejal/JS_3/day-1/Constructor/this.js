//who owns a varible
// global scope
// inside a function local
// Inside a method  block

//this
//this is a object
//which kind of object




// let obj = {}

// obj.name = "global"
// obj.add = "dsfds"

// console.log(obj);



// function obj() {

//        let nam= "rrr"

//     return nam;
// }

//  let a = obj()
// console.log(a);




// // //obj();
// let c = obj();
// console.log(c);

//console.log(obj());

//console.log(this);

//constructor function  vs Normal function

//create a function that will retrun a object
//object will be Nike product having properties
//Name, Price and type

// function object() {

//     let nike_obj = {
//         name: "Jorden",
//         Price: 80000,
//         type: "Casual"
//     }

//     return nike_obj;

// }


//  let nike = object();
//  console.log(nike);



// function object() {

//     let obj = {};

//     obj.name = "Jorden";
//     obj.Price = 80000;
//     obj.type = "Casual"


//     return obj;
// }

// let a = object();
// console.log(a);


function con(a,b,c) {
    
  
    this.name = a
        this.price = b
        this.type = c
    
      // return this;

}

// let a = new con();
// console.log(a);



 let n = new con("zoom", 2500, "fsf");
console.log(n);
 
// let sss = new nikeproduct("dsd", 2000);

// console.log(nnn);

// let prp = new nikeproduct("Run", 2500)
// let pp = new nikeproduct("zoomx", 2600)
//console.log(pp);

// Nikepro = {
//     name: n,
//     price:p
// }

// let prob = Product("Shoes", 1500)
// console.log("product", prob);

//Now solve the same problem using constructor function

// function ProductCF(n, p) {
//   (this.name = n), (this.price = p);
// }

// let Product = ProductCF("Run", 2200);
// console.log("Product", Product);

// function ProductCF(n, p) {
//   (this.name = n), (this.price = p);
// }

//new =  return
//this = object

// let Product = new ProductCF("Run", 2200);
// console.log(Product);

//  "new"  keyword returns object and points "this"  to newly created object
//   without "new" and "this" keyword, you will have to initialze an object and return it explicity
// CF automates the process and acts as a blueprint

//Create ecommerce product databse by accepting values through a form
//array of object

// let arr = [2, 4, 6, 8, 10]
// display(arr)

// function display(product) {
//   product.map(function (el, index) {
//     console.log(el * 2)
//   })
// }

// function display(msg) {
//   console.log(msg);
// }
// let mm = "Hello Good Evening"
// display(mm)

// let arr = [2, 4, 6, 8, 10]
//  console.log(arr);

// let arr2 = arr.forEach(function (el, index) {
//     el = el * 2;
//     console.log(el);
//     return arr
// })
// console.log(arr);

// let arrobj = [{ name: "rrr" }, { name: "ddd" }];

// arrobj.forEach(function (el, index) {
//     console.log(el.name);
// })




