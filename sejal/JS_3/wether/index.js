let api = "https://api.openweathermap.org/data/2.5/weather"
//?q={city name}&appid={API key}"
let key = "eb49f9cda7a8d507d2dc345ef6c01e19"

let main = document.getElementById("main")
let city = document.getElementById("city")
let map = document.getElementById("map")

async function getData() {
    let city_name = city.value;

    map.src = `https://www.google.com/maps/embed/v1/place?q=${city_name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;

    try {
        let res = await fetch(
          `${api}?q=${city_name}&appid=${key}&units=metric`
        );
        let data = await res.json();
        console.log(data);
        display(data);
    } catch (error) {
        console.log("err", error);
    }  
}


function display(data) {
    main.innerHTML = "";
    let name = document.createElement("h2")
    name.innerText = "City name -"+" "+data.name;
    let temp = document.createElement("h3")
    temp.innerText = data.main.temp + " "+ "Cl"
    let hum = document.createElement("h4")
    hum.innerText = data.main.humidity;



    main.append(name, temp, hum)

}


// src ="https://www.google.com/maps/embed/v1/place?q=pune&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";