function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const resultDisplay = document.getElementById('resultDisplay');

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operatorSelect.value;
    
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Error: Invalid number input";
        return;
    }

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            resultDisplay.textContent = "Error: Invalid operator";
            return;
    }

    if (typeof result === 'string') {
        resultDisplay.textContent = result;
    } else {
        const formattedResult = result.toFixed(2);
        resultDisplay.textContent = `Result = ${formattedResult}`; 
    }
}

const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', calculate);

const operatorSelect = document.getElementById('operator');
operatorSelect.addEventListener('change', function() {
    switch (this.value) {
        case 'add':
            calculateBtn.textContent = 'Add';
            break;
        case 'subtract':
            calculateBtn.textContent = 'Subtract';
            break;
        case 'multiply':
            calculateBtn.textContent = 'Multiply';
            break;
        case 'divide':
            calculateBtn.textContent = 'Divide';
            break;
    }
});