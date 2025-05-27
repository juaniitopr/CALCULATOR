// Importa la clase CalculadoraService desde el archivo correspondiente.
// Esta clase contiene las funciones de operaciones matemáticas (sumar, restar, etc.)
const CalculadoraService = require('../services/calculadora.service');

// Importa la función validarEntradas desde el archivo de utilidades.
// Esta función valida que las entradas (a y b) sean correctas antes de realizar una operación.
const { validarEntradas } = require('../utils/validadores');

// Define una clase llamada Calculadora, que actuará como intermediario entre el usuario y el servicio de cálculo.
class Calculadora {
  // Constructor de la clase: se ejecuta al crear una nueva instancia de Calculadora.
  constructor() {
    // Crea una instancia del servicio de cálculo y la guarda como propiedad de la clase.
    this.service = new CalculadoraService();
  }

  // Método principal para realizar cálculos.
  // Recibe la operación a realizar (como string) y dos números: a y b.
  calcular(operacion, a, b) {
    // Valida las entradas antes de hacer el cálculo.
    validarEntradas(a, b);
    
    // Dependiendo del tipo de operación, llama al método correspondiente del servicio.
    switch (operacion) {
      case 'sumar':
        return this.service.sumar(a, b); // Llama a la función sumar del servicio.
      case 'restar':
        return this.service.restar(a, b); // Llama a la función restar del servicio.
      case 'multiplicar':
        return this.service.multiplicar(a, b); // Llama a la función multiplicar del servicio.
      case 'dividir':
        return this.service.dividir(a, b); // Llama a la función dividir del servicio.
      default:
        // Si la operación no es reconocida, lanza un error.
        throw new Error("Operación no soportada");
    }
  }
}

// Exporta la clase Calculadora para que pueda ser utilizada en otros archivos del proyecto.
module.exports = Calculadora;
