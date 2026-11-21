const h2 = document.createElement("h2");
h2.setAttribute("id", "town");
const img = document.createElement("img");
img.setAttribute("id", "image");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.setAttribute("id", "temperature");
p2.setAttribute("id", "description");
const cardWeather = document.querySelector(".card-weather");
cardWeather.appendChild(h2);
cardWeather.appendChild(img);
cardWeather.appendChild(p1);
cardWeather.appendChild(p2);
const town = document.getElementById("town");
const description = document.getElementById("description");
const image = document.getElementById("image");
const temperature = document.getElementById("temperature");
const lat = "-18.929477";
const lon = "47.556779";
const units = "metric";
const key = "5a2ddf7eb8f18e43489771806408fdfc";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;



const weatherData = async () => {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`Fetching weather failed: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        displayResult(data);

    } catch (error) {
        console.error("Error fetching data", error);
    }
}

function displayResult(data) {
    town.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    temperature.innerHTML = `${data.main.temp}&deg;C`;
    const icon = data.weather[0].icon;
    const imageLink = `https://openweathermap.org/payload/api/media/file/${icon}.png`;
    image.setAttribute("src", imageLink);
    image.setAttribute("alt", data.weather[0].description);
}

weatherData();