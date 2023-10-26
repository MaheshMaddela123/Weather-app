document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('locationIn');
    const searchButton = document.getElementById('search');
    const locationResult = document.getElementById('location');
    const temperatureResult = document.getElementById('temperature');
    const descriptionResult = document.getElementById('description');

    const apiKey = '79e8286cba99fb12688b61d611bdd39b';

    searchButton.addEventListener('click', () => {
        const location = locationInput.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const temperatureCelsius = data.main.temp;
                const description = data.weather[0].description;
    
                locationResult.textContent = location;
                temperatureResult.textContent = `${temperatureCelsius}°C`;
                descriptionResult.textContent = description;
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    });
    

});