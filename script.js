
const apiKey = "4e59f2398d86a724e3ea570d10be771f";


function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  
  if (!city) {
    resultDiv.innerHTML = "❗ Please enter a city name.";
    return;
  }

  resultDiv.innerHTML = "⏳ Fetching weather data...";

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const { name, main, weather, sys } = data;
      const html = `
        <h2>${name}, ${sys.country}</h2>
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>🌡️ Temperature: ${main.temp}°C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
      resultDiv.innerHTML = html;
    })
    .catch((error) => {
      resultDiv.innerHTML = `❌ ${error.message}`;
    });
}

