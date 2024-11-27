let key = "0be5cefa77367d7fea0e9652c1cc9677";
let city = document.getElementById("city")
let container = document.getElementById("main")

let api =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric";

async function getData() {
  let res = await fetch(`${api}&appid=${key}&q=${city.value}`);

  let data = await res.json();



display(data)

}


function display({name,main:{temp}}){

    container.innerHTML = ""
   let cityname = document.createElement("h1")
   cityname.innerText = "City Name is - " + " " + name
   let temper = document.createElement("h2")
   temper.innerText = "Temprature is - " +  " " + temp
   
   let map = document.createElement("iframe")
 map.src = `https://www.google.com/maps/embed/v1/place?q=${name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`; 
   container.append(cityname,temper,map)
}








