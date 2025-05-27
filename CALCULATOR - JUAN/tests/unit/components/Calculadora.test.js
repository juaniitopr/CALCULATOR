// Importa la clase Calculadora desde su ruta
const Calculadora = require('../../../src/components/Calculadora');

// Importa el servicio que contiene las funciones matemáticas
const CalculadoraService = require('../../../src/services/calculadora.service');

// Crea una simulación del servicio CalculadoraService
jest.mock('../../../src/services/calculadora.service');

describe('Calculadora', () => {
  let calculadora;     // Instancia de la clase Calculadora que se probará
  let mockService;     // Mock del servicio CalculadoraService

  // Esta función se ejecuta antes de cada prueba individual
  beforeEach(() => {
    // Se crea una instancia del mock del servicio
    mockService = new CalculadoraService();

    // Se crea una nueva instancia de la Calculadora
    calculadora = new Calculadora();

    // Se reemplaza el servicio real de la calculadora por el mock
    calculadora.service = mockService;
  });

  // Agrupa pruebas relacionadas con el método "calcular"
  describe('calcular', () => {

    // Prueba que se llama al método correcto del servicio para cada operación
    it('debería llamar al método correcto del servicio según la operación', () => {
      // Se define lo que deben devolver los métodos del mock cuando son llamados
      mockService.sumar.mockReturnValue(5);
      mockService.restar.mockReturnValue(2);
      mockService.multiplicar.mockReturnValue(6);
      mockService.dividir.mockReturnValue(3);

      // Se prueba que el método calcular devuelve el resultado correcto
      expect(calculadora.calcular('sumar', 2, 3)).toBe(5);
      // Se verifica que el método sumar haya sido llamado con los argumentos correctos
      expect(mockService.sumar).toHaveBeenCalledWith(2, 3);

      expect(calculadora.calcular('restar', 5, 3)).toBe(2);
      expect(mockService.restar).toHaveBeenCalledWith(5, 3);

      expect(calculadora.calcular('multiplicar', 2, 3)).toBe(6);
      expect(mockService.multiplicar).toHaveBeenCalledWith(2, 3);

      expect(calculadora.calcular('dividir', 6, 2)).toBe(3);
      expect(mockService.dividir).toHaveBeenCalledWith(6, 2);
    });

    // Prueba que se lanza un error si la operación no está soportada
    it('debería lanzar error para operación no soportada', () => {
      // Intenta usar una operación no válida (potencia) y espera que lance un error
      expect(() => calculadora.calcular('potencia', 2, 3)).toThrow("Operación no soportada");
    });

    // Prueba que se validan las entradas antes de calcular
    it('debería validar las entradas antes de calcular', () => {
      // Usa una entrada no numérica ('a') y espera un error de validación
      expect(() => calculadora.calcular('sumar', 'a', 2)).toThrow("Ambos valores deben ser números");
    });
  });
});
