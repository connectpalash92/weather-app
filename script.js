document.getElementById('search-button').addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'eb83922dff66b7cabd55c954f9f04d48'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    document.getElementById('weather-info').classList.remove('hidden');
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
}
