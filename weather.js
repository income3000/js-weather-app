
const API_KEY = "cd765bffbc65b265495712c5039b8f1e";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;


const form = document.querySelector("#weather");
const zipCode = document.querySelector("#zipcode");
const results = document.querySelector("#weather-result");
const cityR = document.querySelector("#name")


const updateResults = (data) => {
  const weatherHTML = `<h1 class="${data.main.temp}">Current Temp: ${data.main.temp}</h1>`;
  results.innerHTML = weatherHTML;
  const cityHTML = `<h3 class="${data.name}">City: ${data.name}</h3>`;
  cityR.innerHTML = cityHTML;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const searchString = zipCode.value;
  const REQUEST_URL = BASE_URL + `&zip=${searchString},us`;
  const response = await fetch(REQUEST_URL);
  const weatherData = await response.json();
  console.log(weatherData)
  updateResults(weatherData);
  
};

form.addEventListener("submit", handleSubmit);
