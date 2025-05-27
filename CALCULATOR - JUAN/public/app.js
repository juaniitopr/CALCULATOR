let currentInput = '0';
let firstOperand = null;
let pendingOperation = null;

const display = document.getElementById('display');
const errorElement = document.getElementById('error');

function updateDisplay() {
  display.textContent = currentInput;
}

function appendToDisplay(number) {
  errorElement.textContent = '';

  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }

  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  firstOperand = null;
  pendingOperation = null;
  errorElement.textContent = '';
  updateDisplay();
}

function calculate(operation) {
  try {
    errorElement.textContent = '';

    if (operation === 'igual' && pendingOperation) {
      const result = performLocalCalculation(currentInput);
      currentInput = result.toString();
      firstOperand = null;
      pendingOperation = null;
    } else if (['sumar', 'restar', 'multiplicar', 'dividir'].includes(operation)) {
      if (pendingOperation) {
        currentInput = performLocalCalculation(currentInput).toString();
      }
      firstOperand = currentInput;
      pendingOperation = operation;
      currentInput = '0';
    }

    updateDisplay();
  } catch (error) {
    errorElement.textContent = error.message;
    currentInput = '0';
    updateDisplay();
  }
}

function performLocalCalculation(secondOperand) {
  const a = parseFloat(firstOperand);
  const b = parseFloat(secondOperand);

  switch (pendingOperation) {
    case 'sumar':
      return a + b;
    case 'restar':
      return a - b;
    case 'multiplicar':
      return a * b;
    case 'dividir':
      if (b === 0) {
        throw new Error("División por cero no permitida");
      }
      return a / b;
    default:
      throw new Error("Operación no soportada");
  }
}

// Inicializar display
updateDisplay();
