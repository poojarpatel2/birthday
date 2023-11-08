// script.js
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const message = document.getElementById('message');

button1.addEventListener('click', () => {
    message.innerText = 'Button 1 was clicked!';
});

button2.addEventListener('click', () => {
    message.innerText = 'Button 2 was clicked!';
});

