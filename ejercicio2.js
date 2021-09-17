/* Crear una funcion que dado dos numeros los multiplique, el resultado lo convierta a binario y sume cuantos bits contiene
    Ejemplo: 3*7 = 21, 21 en binario es 10101, que cuente los bits, entonces tiene 3 bits
    Los valores permitidos son enteros entre 0 y 100.000.000
*/
function solucion(a, b) {
    validateNumber(a, b);
  }
  
  function countBinNumbers(a, b) {
    const resultado = a * b;
    const binario = resultado.toString(2);
    const binarioSplited = binario.split('');
    let bitsCount = 0;
  
    for (const element of binarioSplited) {
      if (element == 1) {
        bitsCount++;
      }
    }
    console.log('Bits:', bitsCount);
  }
  
  function validateNumber(a, b) {
    if (a < 0 || a > 100000000 && b < 0 || b > 100000000) {
      console.log(`Los numeros ${a} y ${b} deben ser enteros entre 0 y 100.000.000.`);
      return
    }
    countBinNumbers(a, b)
  }
  
  solucion(3, 7);