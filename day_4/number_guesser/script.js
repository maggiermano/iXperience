
const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', (event) => {

    output.innerHTML = '';
    
    const randomNumber = Math.round(Math.random() * 10);
    
    const element = document.createElement('div');
    element.classList.add('alert');

    if (input.value  == randomNumber) {
        element.classList.add('alert-success');
        element.innerHTML = 'You guessed correctly! The number was:' + randomNumber;
    } else {
        element.classList.add('alert-danger');
        element.innerHTML = 'You guessed incorrectly! The number was ' + randomNumber;
    }

    output.appendChild(element);
})