window.addEventListener('load', () => {
    const calWindChill = (temperature, speed) => {
        return (temperature >= 50 && speed > 3) 
        ?
            Math.round(
                35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature
                * Math.pow(speed, 0.16)))
        ,):
            "N/A";
    }
    
    const displayWindChill = () => {
        let temperature = parseFloat(document.getElementById("currentTemp").textContent);
        let wind = parseFloat(document.getElementById("windSpeed").textContent);
        let result = calWindChill(temperature, wind);
        document.getElementById("windChill").innerHTML = result;
    }
    
    displayWindChill();
})