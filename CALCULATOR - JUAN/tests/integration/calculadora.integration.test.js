// Importa la clase Calculadora desde su ruta correspondiente
const Calculadora = require('../../src/components/Calculadora');

// Bloque de pruebas con la descripción "Calculadora - Integration"
describe('Calculadora - Integration', () => {
  let calculadora;

  // beforeEach se ejecuta antes de cada prueba individual (cada "it")
  // Aquí se crea una nueva instancia de Calculadora para cada prueba
  beforeEach(() => {
    calculadora = new Calculadora();
  });

  // Primera prueba: verifica que las operaciones matemáticas básicas funcionen correctamente
  it('debería realizar operaciones matemáticas correctamente', () => {
    // Espera que la suma de 2 + 3 sea 5
    expect(calculadora.calcular('sumar', 2, 3)).toBe(5);

    // Espera que la resta de 5 - 3 sea 2
    expect(calculadora.calcular('restar', 5, 3)).toBe(2);

    // Espera que la multiplicación de 2 * 3 sea 6
    expect(calculadora.calcular('multiplicar', 2, 3)).toBe(6);

    // Espera que la división de 6 / 2 sea 3
    expect(calculadora.calcular('dividir', 6, 2)).toBe(3);
  });

  // Segunda prueba: verifica que se lancen errores cuando hay entradas inválidas o divisiones por cero
  it('debería manejar errores correctamente', () => {
    // Espera que dividir por cero lance un error específico
    expect(() => calculadora.calcular('dividir', 5, 0)).toThrow("División por cero no permitida");

    // Espera que usar una letra como entrada numérica lance un error de validación
    expect(() => calculadora.calcular('sumar', 'a', 2)).toThrow("Ambos valores deben ser números");
  });
});
