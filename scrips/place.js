document.addEventListener("DOMContentLoaded", function() {
    // Define static variables for temperature and wind speed
    var temperature = 40; // °C
    var windSpeed = 5; // mph

    // Calculate wind chill
    var windChill = calculateWindChill(temperature, windSpeed);

    // Display wind chill on the page
    var weatherList = document.querySelector('.weather-list');
    var windChillItem = document.createElement('li');
    windChillItem.textContent = 'Wind Chill: ' + windChill + ' °C';
    weatherList.appendChild(windChillItem);
});

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill * 10) / 10;
}

// Display current year and last modified date in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last modification: 05/09/2024 10:10 AM";
