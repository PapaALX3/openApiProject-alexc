// fetch('https://www.swapi.tech/api/films')

function callApi(cityWeather) {
    // This returns the weather from San Francisco, both temperature in F and wind in mph
   
    var sf  = 'latitude=37.7749&longitude=-122.4194';
    var ny  = 'latitude=40.7128&longitude=-74.0060';
    var miami  = 'latitude=25.7617&longitude=-80.1918';
    var la  = 'latitude=34.0549&longitude=-118.2426';
    var boulder  = 'latitude=40.0190&longitude=-105.2747';
    var locationToShow = sf;

    if (cityWeather == 'sf') {
        locationToShow = sf;
    }

    if (cityWeather == 'la') {
        locationToShow = la;
    }

    if (cityWeather == 'ny') {
        locationToShow = ny;
    }

    if (cityWeather == 'miami') {
        locationToShow = miami;
    }

    if (cityWeather == 'boulder') {
        locationToShow = boulder;
    }
    var apiCall = 'https://api.open-meteo.com/v1/forecast?' + locationToShow+ '&current=temperature_2m,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit';

    console.log(apiCall);
    fetch(apiCall)
    .then(response =>{
        if (!response.ok){
            throw new Error('Request failed');
            }
       return response.json();
    }).then(weatherData => {
        console.log('answer: ' + weatherData);
        console.log(weatherData);

        // reset the section where we show info
        document.getElementById('weatherInfo').innerHTML = '';

        document.getElementById('title').innerHTML = 'Today weather in ' + cityWeather;
        
        const tempSf = weatherData.current.temperature_2m;
        const windSf = weatherData.current.wind_speed_10m;
        // Create  a ul
        const list = document.createElement('ul');
        // Create an li for temp and wind
        const temp = document.createElement('li');
        temp.innerHTML = `🌡️ Temperature: ${tempSf} F`;
        const wind = document.createElement('li');
        wind.innerHTML = `🌬️ Wind: ${windSf} mph`;
        // You need to append the li inside the ul
        list.appendChild(temp);
        list.appendChild(wind);
        // You need to append the ul inside the main in the body
        document.getElementById('weatherInfo').appendChild(list);
    })
}
