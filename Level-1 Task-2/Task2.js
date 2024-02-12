let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function operate(operator) {
    if (operator === '=') {
        try {
            displayValue = eval(displayValue).toString();
        } catch (error) {
            displayValue = 'Error';
        }
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function appendToDisplay(value) {
    if (value === '%') {
        applyPercentage();
        return;
    }

    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function applyPercentage() {
    try {
        const valueWithoutPercent = displayValue.replace('%', '');
        const result = eval(valueWithoutPercent);
        if (!isNaN(result)) {
            displayValue = (result / 100).toString();
        } else {
            displayValue = 'Error';
        }
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}