import displayCurrentWeather from './viewManager';

async function getWeatherData(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=c1fc52efb6b3458d8d8135816211201&q=${location}`,
        {
        mode: 'cors',
        }
    );
    if (response.status === 400) {
        throwErrorMsg();
    } else {
        console.log("Loading!");
        const weatherData = await response.json();
        displayCurrentWeather(weatherData.current);
        console.log("Done!");
    }
}

export default getWeatherData;