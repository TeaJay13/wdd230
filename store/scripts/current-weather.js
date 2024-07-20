const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=40.81660431638678&lon=-112.0073482272042&appid=8cbe323e6af26690e188cd2bf751f57c&units=imperial"

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('#weather-figcaption')

// display the weather data

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    captionDesc.innerHTML = data.weather[0].main
    weatherIcon.setAttribute('src', "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png")
}

async function apiFetch() {
    try {
      const response = await fetch(WEATHER_URL);
      if (response.ok) {
        const data = await response.json()
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text())
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch()