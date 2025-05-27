// Importa las funciones "esNumero" y "validarEntradas" desde el archivo de utilidades
const { esNumero, validarEntradas } = require('../../../src/utils/validadores');

describe('validadores', () => {
  // Grupo de pruebas para la función "esNumero"
  describe('esNumero', () => {
    // Esta prueba verifica que la función retorna true para valores que son numéricos o que pueden ser convertidos a número
    it('debería retornar true para valores numéricos', () => {
      expect(esNumero(5)).toBe(true);        // Número entero
      expect(esNumero('5')).toBe(true);      // Cadena que representa un número
      expect(esNumero(3.14)).toBe(true);     // Número decimal
    });

    // Esta prueba verifica que la función retorna false para valores que no son numéricos
    it('debería retornar false para valores no numéricos', () => {
      expect(esNumero('abc')).toBe(false);   // Cadena no numérica
      expect(esNumero(null)).toBe(false);    // Valor nulo
      expect(esNumero(undefined)).toBe(false); // Valor indefinido
    });
  });

  // Grupo de pruebas para la función "validarEntradas"
  describe('validarEntradas', () => {
    // Esta prueba verifica que no se lance ningún error cuando las entradas son válidas (números o cadenas que representan números)
    it('no debería lanzar error para entradas numéricas', () => {
      expect(() => validarEntradas(5, 10)).not.toThrow();        // Dos números válidos
      expect(() => validarEntradas('5', '10')).not.toThrow();    // Dos strings numéricos válidos
    });

    // Esta prueba verifica que se lance un error cuando alguna de las entradas no sea un número válido
    it('debería lanzar error para entradas no numéricas', () => {
      expect(() => validarEntradas('a', 5)).toThrow("Ambos valores deben ser números");  // Primer valor no numérico
      expect(() => validarEntradas(5, 'b')).toThrow("Ambos valores deben ser números");  // Segundo valor no numérico
    });
  });
});
