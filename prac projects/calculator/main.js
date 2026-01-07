let currentInput = '';
let previousInput = '';
let currentOperation = '';

function AppendNumber(number) {
    currentInput += number;
    document.getElementById('display').value =
        previousInput + currentOperation + currentInput;
}

function AppendOperator(operation) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        Calculate();
    } else {
        previousInput = currentInput;
        currentInput = '';
    }

    currentOperation = operation;
    document.getElementById('display').value =
        previousInput + currentOperation;
}

function Calculate() {
    if (previousInput === '' || currentInput === '' || currentOperation === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = prev / current; break;
        default: return;
    }

    currentInput = result.toString();
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = currentInput;
}

function ClearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}
