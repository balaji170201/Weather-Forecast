let weatherContainer = document.getElementById('weatherContainer');

async function getWeatherData(){
    try{
        let cityName = document.getElementById('cityName').value;
        console.log(cityName);

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7ec61bd8dfa9e228cd576ac80f210d84`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        const {temp,pressure,humidity} = data.main;
        const {speed,deg} = data.wind;

        weatherContainer.innerHTML = `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://cdn3.vectorstock.com/i/1000x1000/10/87/weather-forecast-vector-11181087.jpg" class="img-fluid rounded-start" alt="forecast_image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${cityName} Weather Details</h5>
                        <p class="card-text m-0 p-0">Temperature : ${temp}</p>
                        <p class="card-text m-0 p-0">Pressure : ${pressure}</p>
                        <p class="card-text m-0 p-0">Humidity : ${humidity}</p>
                        <p class="card-text m-0 p-0">Wind speed : ${speed}</p>
                        <p class="card-text m-0 p-0">Wind degree : ${deg}</p>
                        <p class="card-text m-0 p-0">Description : ${data.weather[0].description}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
    catch(error){
        console.log("City not found")
    }
}
