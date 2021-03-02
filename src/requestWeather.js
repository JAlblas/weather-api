import { displayCurrentWeather, displayErrorMessage, showActivityIndicator, removeActivityIndicator } from './viewManager';

async function getWeatherData(location) {
    showActivityIndicator();
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c1fc52efb6b3458d8d8135816211201&q=${location}`,
        {
        mode: 'cors',
        }
    );
    if (response.status === 400) {
        displayErrorMessage();
    } else {
        const weatherData = await response.json();
        displayCurrentWeather(weatherData.current);
    }

    removeActivityIndicator()
}

export default getWeatherData;