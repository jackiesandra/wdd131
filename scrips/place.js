// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

// Display wind chill when the page loads
window.onload = function() {

    var temperature = 40; 
    var windSpeed = 5; 

    // Calculate wind chill
    var windChill = calculateWindChill(temperature, windSpeed);

    var weatherList = document.querySelector('.weather-list');
    var windChillItem = document.createElement('li');
    windChillItem.textContent = 'Wind Chill: ' + windChill.toFixed(2) + ' °C';
    weatherList.appendChild(windChillItem);

    // Display current year and last modified date
    var currentYear = new Date().getFullYear();
    var lastModifiedDate = document.lastModified;
    var currentYearElement = document.getElementById('currentyear');
    var lastModifiedElement = document.getElementById('lastModified');
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modification: " + lastModifiedDate;
    }
};
