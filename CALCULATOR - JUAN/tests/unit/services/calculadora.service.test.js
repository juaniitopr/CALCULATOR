// Importa la clase CalculadoraService desde su ubicación en el proyecto
const CalculadoraService = require('../../../src/services/calculadora.service');

describe('CalculadoraService', () => {
  let calculadora; // Variable que contendrá una instancia del servicio

  // beforeEach se ejecuta antes de cada prueba individual
  beforeEach(() => {
    // Se crea una nueva instancia del servicio antes de cada prueba
    calculadora = new CalculadoraService();
  });

  // Grupo de pruebas para el método "sumar"
  describe('sumar', () => {
    it('debería sumar dos números correctamente', () => {
      // Prueba con números positivos
      expect(calculadora.sumar(2, 3)).toBe(5);
      // Prueba con un número negativo
      expect(calculadora.sumar(-1, 1)).toBe(0);
      // Prueba con ceros
      expect(calculadora.sumar(0, 0)).toBe(0);
    });
  });

  // Grupo de pruebas para el método "restar"
  describe('restar', () => {
    it('debería restar dos números correctamente', () => {
      expect(calculadora.restar(5, 3)).toBe(2);
      expect(calculadora.restar(10, 20)).toBe(-10);
    });
  });

  // Grupo de pruebas para el método "multiplicar"
  describe('multiplicar', () => {
    it('debería multiplicar dos números correctamente', () => {
      expect(calculadora.multiplicar(3, 4)).toBe(12);
      expect(calculadora.multiplicar(-2, 5)).toBe(-10);
    });
  });

  // Grupo de pruebas para el método "dividir"
  describe('dividir', () => {
    it('debería dividir dos números correctamente', () => {
      expect(calculadora.dividir(10, 2)).toBe(5);
      expect(calculadora.dividir(9, 3)).toBe(3);
    });

    // Verifica que se lance un error al intentar dividir por cero
    it('debería lanzar un error al dividir por cero', () => {
      expect(() => calculadora.dividir(5, 0)).toThrow("División por cero no permitida");
    });
  });
});
