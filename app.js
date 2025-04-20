
/**
 * Suma dos números 
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} Suma de a y b
 */
function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Importante comprobar que si se divide entre 0, sale el mensaje de error
  function dividir(a, b) {
    if (b === 0) {
      return 'Error: no se puede dividir entre cero';
    }
    return a / b;
  }
  
  // Deberemos intercambiar estos valores por defecto, por la entrada de los usuarios
  console.log(sumar(5, 3));
  console.log(restar(10, 4));
  console.log(multiplicar(6, 7));
  console.log(dividir(8, 0));
  