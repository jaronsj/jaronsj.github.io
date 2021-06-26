window.addEventListener('load', () =>{
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=bc0f5b4b03b1172429a1ac3fd29e6dcc&units=imperial';
    fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('currentTemp').textContent = jsObject.main.temp;
        // document.getElementById('windChill').textContent = displayWindChill(jsObject.main.temp, jsObject.wind.speed);
        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    });

    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=bc0f5b4b03b1172429a1ac3fd29e6dcc&units=imperial';
        fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            
            const peaksforecast = jsObject.list.filter(x =>
                x.dt_txt.includes(`18:00:00`));

            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            let day = 0;
            peaksforecast.forEach(forecast => {
                let d = new Date(forecast.dt_txt);
                document.getElementById(`weekday${day+1}`).textContent = weekdays[d.getDay()];
                day++;
        });

        for (let i = 0; i < peaksforecast.length; i++) {
            const imagesrc = 'https://openweathermap.org/img/w/' + peaksforecast[i].weather[0].icon + '.png';
            const desc = peaksforecast[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
            document.getElementById(`day${i+1}`).innerHTML = `${Math.round(peaksforecast[i].main.temp)}&#8457`;
        }
        
    });
})