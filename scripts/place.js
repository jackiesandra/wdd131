document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last modification: " + document.lastModified;

    function calculateWindChill(temp, windSpeed) {
        return Math.round((35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)) * 10) / 10;
    }

    const temp = 40; // Static value for demonstration
    const windSpeed = 5; // Static value for demonstration
    const windChill = (temp <= 50 && windSpeed > 3) ? calculateWindChill(temp, windSpeed) : "N/A";

    document.getElementById('windChill').textContent = windChill;
});
