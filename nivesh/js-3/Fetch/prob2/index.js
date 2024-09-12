
let btn = document.querySelector("button");
let input = document.querySelector("input");

let main = document.getElementById("main");

let map = document.getElementById("map")

btn.addEventListener("click",weather)

let key = "eb49f9cda7a8d507d2dc345ef6c01e19";

let api =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&";

//   &appid={API key}
//  weather()

 async function weather(){

    let city = input.value;
    // console.log(city)

    let res = await fetch(`${api}&appid=${key}&q=${city}`);
    // console.log(res)
    let data = await res.json()
     console.log(data)
     display(data)
    
} 



function display(data){
    main.innerHTML = ""
    let name = document.createElement("h1"); 
    name.innerText = "city Name" + " " +  data.name
    let temp = document.createElement("h2");
    temp.innerText = "Temprature"+ " "+  data.main.temp

    // let map = document.createElement("iframe")

    map.src=`https://www.google.com/maps/embed/v1/place?q=${data.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`

    main.append(name,temp, map)
}






// Template literal  `${js} `

// let name = "Vikash";

// let greet = "Hello" + " " + name

// let greet2 = `Hello ${name}`

// console.log(greet2)
