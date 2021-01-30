function displayCurrentWeather(data) {
    var elem = document.querySelector('.temp');
    if (elem) {
        elem.parentNode.removeChild(elem);
    }

    const element = document.createElement('p');
    element.innerHTML = data.temp_c;
    element.classList.add('temp');

    const celciusSign = document.createElement('p');
    celciusSign.innerHTML = " ℃";
    celciusSign.classList.add('sign');

    let container = document.querySelector('#temp-div');
    container.appendChild(element); 
    container.appendChild(celciusSign); 
}

export default displayCurrentWeather;