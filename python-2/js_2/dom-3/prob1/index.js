let data = [
  {
    name: "rahul",
    color: "blue",
  },
  {
    name: "priti",
    color: "red",
  },
  {
    name: "akash",
    color: "green",
  },
  {
    name: "rakshi",
    color: "purple",
  },
  {
    name: "yash",
    color: "yellow",
  },
  {
    name: "ayman",
    color: "purple",
  },
];


let main = document.getElementById("main");

//  for(let i =0;i<data.length;i++){
//  console.log(i, data[i])
// //     // console.log(data)
//  }

//  console.log("************************")


data.forEach(function(el,index,array){
// console.log(array)
let name = document.createElement("h1")
name.innerText = el.name;

name.style.color = el.color

main.append(name)

})



