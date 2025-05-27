// Función que verifica si un valor es un número válido
function esNumero(valor) {
  // parseFloat convierte el valor en un número decimal si es posible
  // isNaN verifica si el resultado no es un número
  // isFinite verifica que el número sea finito (no Infinity o -Infinity)
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función que valida que dos valores (a y b) sean números válidos
function validarEntradas(a, b) {
  // Usa la función esNumero para validar ambos valores
  if (!esNumero(a) || !esNumero(b)) {
    // Si alguno de los dos no es un número válido, lanza un error
    throw new Error("Ambos valores deben ser números");
  }
}

// Exporta las funciones para que puedan ser utilizadas en otros archivos del proyecto
module.exports = {
  esNumero,
  validarEntradas
};
