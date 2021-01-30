import './style.css';
import getWeatherData from './requestWeather';

let button = document.querySelector('#fetchWeatherButton');
let input = document.querySelector('input');

button.addEventListener("click", (e) => {
    e.preventDefault();
    getWeatherData(input.value);
})

getWeatherData("Copenhagen");