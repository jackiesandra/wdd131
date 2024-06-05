document.addEventListener("DOMContentLoaded", function() {
    const temp = 40; // Temperature in Celsius
    const windSpeed = 5; // Wind speed in km/h

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = windChill;

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last modification: " + new Date(document.lastModified).toLocaleString();
});
