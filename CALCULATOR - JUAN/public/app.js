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

async function calculate(operation) {
  try {
    errorElement.textContent = '';
    
    if (operation === 'igual' && pendingOperation) {
      const result = await performCalculation(currentInput);
      currentInput = result.toString();
      firstOperand = null;
      pendingOperation = null;
    } else if (['sumar', 'restar', 'multiplicar', 'dividir'].includes(operation)) {
      if (pendingOperation) {
        currentInput = (await performCalculation(currentInput)).toString();
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

async function performCalculation(secondOperand) {
  const response = await fetch('/api/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operation: pendingOperation,
      a: parseFloat(firstOperand),
      b: parseFloat(secondOperand)
    })
  });
  
  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.message);
  }
  
  return data.result;
}

// Inicializar display
updateDisplay();
