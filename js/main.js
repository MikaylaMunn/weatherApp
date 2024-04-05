// Create elements
const card = document.createElement("div"); // Create a new div element for the card
card.classList.add("card"); // Add a "card" class to the card div

const searchDiv = document.createElement("div"); // Create a new div element for the search box
searchDiv.classList.add("search"); // Add a "search" class to the search div

const input = document.createElement("input"); // Create a new input element for the city search input
input.type = "text"; // Set the input type to text
input.placeholder = "Enter city name"; // Set a placeholder text for the input
input.spellcheck = false; // Disable spellcheck for the input

const button = document.createElement("button"); // Create a new button element for the search button
const img = document.createElement("img"); // Create a new image element for the search button icon
img.src = "./images/search.png"; // Set the image source to the search icon
button.appendChild(img); // Append the image to the button

const errorDiv = document.createElement("div"); // Create a new div element for displaying error messages
errorDiv.classList.add("error"); // Add an "error" class to the error div
errorDiv.style.display = "none"; // Hide the error div initially
const errorMessage = document.createElement("p"); // Create a new paragraph element for the error message
errorMessage.textContent = "Invalid city name"; // Set the text content of the error message
errorDiv.appendChild(errorMessage); // Append the error message to the error div

const weatherDiv = document.createElement("div"); // Create a new div element for displaying weather information
weatherDiv.classList.add("weather"); // Add a "weather" class to the weather div
weatherDiv.style.display = "none"; // Hide the weather div initially
const weatherIcon = document.createElement("img"); // Create a new image element for the weather icon
weatherIcon.classList.add("weather-icon"); // Add a "weather-icon" class to the weather icon
weatherIcon.src = "./images/clear.png"; // Set the default weather icon
weatherDiv.appendChild(weatherIcon); // Append the weather icon to the weather div

const temp = document.createElement("h1"); // Create a new h1 element for displaying the temperature
temp.classList.add("temp"); // Add a "temp" class to the temperature element
temp.textContent = "28°F"; // Set the default temperature text
weatherDiv.appendChild(temp); // Append the temperature element to the weather div

const city = document.createElement("h2"); // Create a new h2 element for displaying the city name
city.classList.add("city"); // Add a "city" class to the city element
city.textContent = "Da Nang"; // Set the default city name
weatherDiv.appendChild(city); // Append the city element to the weather div

const detailsDiv = document.createElement("div"); // Create a new div element for displaying additional weather details
detailsDiv.classList.add("details"); // Add a "details" class to the details div

const col1 = document.createElement("div"); // Create a new div element for the first column of details
col1.classList.add("col"); // Add a "col" class to the first column
const humidityIcon = document.createElement("img"); // Create a new image element for the humidity icon
humidityIcon.src = "./images/humidity.png"; // Set the humidity icon
col1.appendChild(humidityIcon); // Append the humidity icon to the first column
const humidity = document.createElement("div"); // Create a new div element for displaying humidity
humidity.innerHTML = "<p class='humidity'>45%</p><p>Humidity</p>"; // Set the default humidity text
col1.appendChild(humidity); // Append the humidity element to the first column

const col2 = document.createElement("div"); // Create a new div element for the second column of details
col2.classList.add("col"); // Add a "col" class to the second column
const windIcon = document.createElement("img"); // Create a new image element for the wind icon
windIcon.src = "./images/wind.png"; // Set the wind icon
col2.appendChild(windIcon); // Append the wind icon to the second column
const wind = document.createElement("div"); // Create a new div element for displaying wind speed
wind.innerHTML = "<p class='wind'>15km/h</p><p>Wind speed</p>"; // Set the default wind speed text
col2.appendChild(wind); // Append the wind speed element to the second column

detailsDiv.appendChild(col1); // Append the first column to the details div
detailsDiv.appendChild(col2); // Append the second column to the details div

weatherDiv.appendChild(detailsDiv); // Append the details div to the weather div

// Append elements to the body
document.body.appendChild(card); // Append the card to the body
card.appendChild(searchDiv); // Append the search div to the card
searchDiv.appendChild(input); // Append the input to the search div
searchDiv.appendChild(button); // Append the button to the search div
card.appendChild(errorDiv); // Append the error div to the card
card.appendChild(weatherDiv); // Append the weather div to the card
