let display = document.getElementById('display');
let currentInput = '';

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    if (buttonValue === '=') {
        calculateResult();
    } else {
        currentInput += buttonValue;
        display.value = currentInput;
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = currentInput;
}