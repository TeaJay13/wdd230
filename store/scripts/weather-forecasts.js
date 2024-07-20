const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast?lat=40.81660431638678&lon=-112.0073482272042&appid=8cbe323e6af26690e188cd2bf751f57c&units=imperial";

// Select HTML elements where data will be displayed
const tempSpan = document.querySelector('#current-temp');
const windSpan = document.querySelector('#windspeed');
const chillSpan = document.querySelector('#windchill');

// Function to display the current weather data
function displayCurrentWeather(data) {
    // Get the first entry from the forecast list for current weather
    const currentWeather = data.list[0];
    const temp = currentWeather.main.temp;
    const windSpeed = currentWeather.wind.speed;

    // Display the temperature and wind speed
    tempSpan.textContent = temp;
    windSpan.textContent = windSpeed;

    // Display the weather description
    document.querySelector('#current-conditions').textContent = currentWeather.weather[0].description;

    // Calculate and display wind chill
    showWindChill(temp, windSpeed);
}

// Function to calculate and display wind chill
function showWindChill(temp, wind) {
    // Check if wind chill is applicable
    if (temp > 50 || wind <= 3) {
        chillSpan.innerText = 'N/A';
        return;
    }

    // Calculate the wind chill using the formula
    const chillFactor = Math.pow(wind, 0.16);
    const chill = 35.74 + (0.6215 * temp) - (35.75 * chillFactor) + (0.4275 * temp * chillFactor);
    
    // Display the wind chill
    chillSpan.innerHTML = `${chill.toFixed(0)}&deg;F`;
}

// Function to get the forecast for each day at 09:00:00
function getDailyForecasts(data) {
    const dailyForecasts = [];
    const forecastMap = {};

    // Iterate through the list and group forecasts by date
    for (let i = 0; i < data.list.length; i++) {
        const forecast = data.list[i];
        const forecastDate = forecast.dt_txt.split(" ")[0];

        // If we don't have a forecast for this date yet, initialize an empty array
        if (!forecastMap[forecastDate]) {
            forecastMap[forecastDate] = [];
        }

        // Add the forecast to the date's list
        forecastMap[forecastDate].push(forecast);
    }

    // For each date, find the forecast closest to 09:00:00
    for (const date in forecastMap) {
        let dailyForecast = null;

        // Iterate through the forecasts for the current date
        for (let i = 0; i < forecastMap[date].length; i++) {
            const forecast = forecastMap[date][i];
            const forecastTime = forecast.dt_txt.split(" ")[1];

            // Check if the forecast time is 09:00:00
            if (forecastTime === "09:00:00") {
                dailyForecast = forecast;
                break;
            }
        }

        // If we found a forecast, add it to the daily forecasts
        if (dailyForecast) {
            dailyForecasts.push(dailyForecast);
        }
    }

    return dailyForecasts.slice(0, 3);
}

// Function to display the 3-day weather forecast
function displayForecast(data) {
    const forecasts = getDailyForecasts(data);

    for (let i = 0; i < forecasts.length; i++) {
        const dayForecast = forecasts[i];
        const date = new Date(dayForecast.dt_txt).toLocaleDateString();
        const time = new Date(dayForecast.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const temp = dayForecast.main.temp;
        const icon = `https://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`;
        const desc = dayForecast.weather[0].description;

        // Update the HTML with forecast data
        document.querySelector(`#day${i + 1} .date`).textContent = date;
        document.querySelector(`#day${i + 1} .time`).textContent = time;
        document.querySelector(`#day${i + 1} .temp`).textContent = `${temp.toFixed(0)}`;
        document.querySelector(`#day${i + 1} .icon`).setAttribute('src', icon);
        document.querySelector(`#day${i + 1} .icon`).setAttribute('alt', desc);
        document.querySelector(`#day${i + 1} .desc`).textContent = desc;
    }
}

// Function to fetch and display weather data
async function fetchWeatherData() {
    try {
        const response = await fetch(FORECAST_URL);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
            displayForecast(data);
        } else {
            throw new Error('Error fetching weather data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the function to fetch data when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchWeatherData);
