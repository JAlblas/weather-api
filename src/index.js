import './style.css';

const element = document.createElement('div');
element.innerHTML = "Hello";
element.classList.add('hello');

document.body.appendChild(element);