

const form = document.getElementById('form');

const loanInput = document.getElementById('loan-input');
const interestInput = document.getElementById('interest-input');
const yearInput = document.getElementById('year-input');

const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inBrackets = 1 + (interestInput.value / 100);
    const outBrackets = Math.pow(inBrackets, yearInput.value);
    const finalAmount = loanInput.value * outBrackets;

    output.classList.remove('hide');
    output.innerHTML = finalAmount.toFixed(2);
})