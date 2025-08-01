// Your OpenWeatherMap API key (replace with a secure one in production)
const apiKey = "f657f1a49a34fe80152768b99d027962";

// City to fetch weather for (can be dynamic using Geolocation API)
const city = "Brisbane";

/**
 * Fetches current weather data for a given city from OpenWeatherMap API
 * and updates the DOM with the day, temperature, and weather icon.
 */
async function fetchWeather() {
    // Request weather data in metric units (Celsius)
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // Parse JSON response
    const data = await response.json();

    // Format current day of the week (e.g., Monday)
    const day = new Date().toLocaleDateString("en-AU", { weekday: "long" });

    // Round temperature to nearest whole number
    const temp = Math.round(data.main.temp);

    // Extract weather icon code and build image URL
    const icon = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // Update UI elements with weather info
    document.getElementById("weather-day").textContent = day;
    document.getElementById("weather-temp").textContent = `${temp}°C`;
    document.getElementById("weather-icon").src = iconURL;
}

// Call the function once when the script runs
fetchWeather();
