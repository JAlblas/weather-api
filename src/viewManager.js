function displayCurrentWeather(data) {
    const element = document.createElement('p');
    element.innerHTML = data.temp_c;
    element.classList.add('temp');

    document.body.appendChild(element); 
}

export default displayCurrentWeather;