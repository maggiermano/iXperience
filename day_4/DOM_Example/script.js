//console.log(document);

/* const element = document.getElementById('yah');

//const anElem = element.parentElement.parentElement.children[0].children.[2];
// element.classList.add('p-5');

// const cells = document.getElementsByName('second');

const containers = document.getElementsByClassName('container');
//anElem.style="background-color: red;";

const newElem = document.createElement('div');
newElem.innerHTML = "I am a new DIV"

const container = containers[0];

// container.setAttribute('label', 'howdy');
container.Attribute('label', 'howdy');

container.appendChild(newElem);

//console.log(anElem); */


const form = document.getElementById("form");
const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");
const button = document.getElementById("button");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(nameInput.value + " "  + surnameInput.value);

    nameInput.value = '';
    surnameInput.value = '';
    localStorage.clear();
});

nameInput.addEventListener('keypresser', (event) => {
    localStorage.setItem('name', event.target.value);
})

nameInput.addEventListener('change', (event) => {
    localStorage.setItem('name', event.target.value);
})

surnameInput.addEventListener('keypresser', (event) => {
    localStorage.setItem('name', event.target.value);
})

surnameInput.addEventListener('change', (event) => {
    localStorage.setItem('name', event.target.value);
})

nameInput.value = localStorage.getItem('name');
surnameInput.value = localStorage.getItem('surname');

/* nameInput.addEventListener('change',(event)=> {
    console.log(event);
})

surnameInput.addEventListener('keypress', (event) => {
    console.log(event);
})

form.addEventListener('click', (event) => {
    console.log('Form Click', event);
})

button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Button Click', event);
}) */