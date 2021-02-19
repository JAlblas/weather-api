function displayCurrentWeather(data) {
    var elem = document.querySelector('.temp-box');
    if (elem) {
        elem.parentNode.removeChild(elem);
    }

    const tempBox = document.createElement('div');
    tempBox.classList.add('temp-box');

    const element = document.createElement('p');
    element.innerHTML = data.temp_c;
    element.classList.add('temp');

    const celciusSign = document.createElement('p');
    celciusSign.innerHTML = " ℃";
    celciusSign.classList.add('sign');

    let container = document.querySelector('#temp-div');
    tempBox.appendChild(element); 
    tempBox.appendChild(celciusSign); 
    container.appendChild(tempBox);
}

export default displayCurrentWeather;