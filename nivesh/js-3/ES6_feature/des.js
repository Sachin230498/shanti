// Destructuring

// let arr = [1, "hello", "how are you", true, [12,45], {name:"nivi",age:23}]

// arr[0]
// arr[1]
// arr[arr.length-1]

// let [a,b,c,d,e,f] = arr

// console.log(f)

// let abc = [a, b, c, d, e, f];

// console.log(abc)

let data = {
  name: "Beef",
  img: "https://www.themealdb.com/images/category/beef.png",
  ingredients: ["Beef", "Salt", "Black Pepper", "Olive Oil"],
  price: 400,
  abc:{
    a:"x"
    ,b:"y"
  }
};



let {name,img,ingredients:[f,e,c,d],price,abc} = data

console.log(abc)