// API key and URL for OpenWeatherMap API
const apiKey = "18210e2beba77105cffb85f6e6d4f239";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

// DOM elements
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

// Function to fetch weather data from the API
async function fetchWeatherData(query) {
    const url = `${apiUrl}${query}&units=imperial&appid=${apiKey}`; // Include units=imperial for Fahrenheit
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// Function to update the UI with weather data
function updateWeatherUI(data) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    // Handle weather icon
    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "./images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "./images/clear.png";
            break;
        case "Drizzle":
            weatherIcon.src = "./images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "./images/mist.png";
            break;
        case "Rain":
            weatherIcon.src = "./images/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "./images/snow.png";
            break;
        default:
            weatherIcon.src = "./images/default.png";
    }

    // Show weather data and hide error message
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

// Function to display an error message
function displayError() {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}

// Event listener for the search button
searchbtn.addEventListener("click", async () => {
    const query = searchbox.value;
    if (!query) {
        return; // Don't proceed if the query is empty
    }
    try {
        const data = await fetchWeatherData(query);
        updateWeatherUI(data);
    } catch (error) {
        displayError();
    }
});
