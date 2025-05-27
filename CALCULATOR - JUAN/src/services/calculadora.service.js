// Define una clase llamada CalculadoraService que contiene métodos para realizar operaciones matemáticas básicas.
class CalculadoraService {

  // Método para sumar dos números
  sumar(a, b) {
    return a + b;
  }

  // Método para restar el segundo número al primero
  restar(a, b) {
    return a - b;
  }

  // Método para multiplicar dos números
  multiplicar(a, b) {
    return a * b;
  }

  // Método para dividir el primer número por el segundo
  dividir(a, b) {
    // Verifica si el divisor es cero para evitar errores matemáticos
    if (b === 0) {
      // Si b es 0, lanza un error indicando que no se puede dividir por cero
      throw new Error("División por cero no permitida");
    }
    // Si b no es 0, realiza la división normalmente
    return a / b;
  }

  // Método para calcular el porcentaje de un número
  // Ejemplo: calcularPorcentaje(200, 10) devuelve 20 (el 10% de 200)
  calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
  }
}

// Exporta la clase CalculadoraService para que pueda ser utilizada en otros archivos del proyecto
module.exports = CalculadoraService;
