let apiKey = "0be5cefa77367d7fea0e9652c1cc9677";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("searchButton").addEventListener("click", async () => {
  let city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name.");

  try {
    let response = await fetch(
      `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    let data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    alert(error.message);
  }
});

function displayCurrentWeather(data) {
  const weatherHTML = `
    <h2>Current Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <img class="weather-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
  `;
  document.getElementById("currentWeather").innerHTML = weatherHTML;
}


function generateThreeDayForecast() {
  let simulatedData = [
    { day: "Day 1", temp: "25°C", condition: "Sunny", icon: "01d" },
    { day: "Day 2", temp: "23°C", condition: "Cloudy", icon: "03d" },
    { day: "Day 3", temp: "28°C", condition: "Rainy", icon: "09d" },
  ];

  let forecastHTML = "<h2>3-Day Forecast</h2>";
  simulatedData.forEach((day) => {
    forecastHTML += `
      <div class="weather-card">
        <h3>${day.day}</h3>
        <p>${day.temp}</p>
        <p>${day.condition}</p>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${day.icon}.png" alt="Weather Icon">
      </div>
    `;
  });

  document.getElementById("forecast").innerHTML = forecastHTML;
}
generateThreeDayForecast();


function simulateGeolocation() {
  let city = "Indore"; // Simulated location
  document.getElementById("cityInput").value = city;
}
simulateGeolocation();


document.getElementById("searchButton").click(); 

