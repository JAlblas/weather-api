import './style.css';
import getWeatherData from './requestWeather';

const element = document.createElement('div');
element.innerHTML = "Hello again!€€!";
element.classList.add('hello');

document.body.appendChild(element); 

let button = document.querySelector('#fetchWeatherButton');
let input = document.querySelector('input');

button.addEventListener("click", (e) => {
    e.preventDefault();
    getWeatherData(input.value);
})

getWeatherData("Copenhagen");