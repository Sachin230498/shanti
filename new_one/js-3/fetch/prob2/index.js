let key = "0be5cefa77367d7fea0e9652c1cc9677";
let city = document.getElementById("city")
let main = document.getElementById("main")

let api =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric";

async function getData() {
  let res = await fetch(`${api}&appid=${key}&q=${city.value}`);

  let data = await res.json();



  console.log(data);
display(data)

}


function display(data){
    main.innerHTML = ""
   let name = document.createElement("h1")
   name.innerText = "City Name is - " + " " + data.name
   let temp = document.createElement("h2")
   temp.innerText = "Temprature is - " +  " " + data.main.temp
   
   let map = document.createElement("iframe")
 map.src = `https://www.google.com/maps/embed/v1/place?q=${data.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`; 
   main.append(name,temp,map)
}




