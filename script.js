/**
 * Weather App
 */

// API_KEY for maps api


/**
 * Retrieve weather data from openweathermap
 */
const getWeatherData = (city) => {
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`
  const response = fetch(url)
  return response.then(data => {
    return data.json()
  })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
 getWeatherData(city)
  .then(val=>{
    showWeatherData(val)
  })
  
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (data) => {
  document.getElementById("city-name").innerText =data.name;
  document.getElementById("weather-type").innerText = data.weather[0].main;
  document.getElementById("temp").innerText = data.main.temp;
  document.getElementById("min-temp").innerText = data.main.temp_min;
  document.getElementById("max-temp").innerText = data.main.temp_max;
}

