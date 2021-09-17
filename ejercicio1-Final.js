const A = [1, 0, 1, 1, 1, 1, 1, 0, 1];
const B = [0, 0, 0, 0, 0];

function solucion(a) {
  let correctArrayLength = false;
  correctArrayLength = validateArrayLength(a);

  let validNumbers = false;
  validNumbers = validateNumbers(a);

  if (correctArrayLength == true && validNumbers == true) {

    let changesCount = 0;

    for (let index = 1; index < a.length; index++) {

      const previousElement = a[index - 1];
      const currentElement = a[index];

      if (previousElement % 2 == currentElement % 2) {
        a[index] = a.first;
        changesCount++;
      }
    }
    console.log('Cambios necesarios: ', changesCount)
  }
}

function validateArrayLength(a) {
  if (a.length < 0 || a.length > 100) {
    console.log('La matriz debe contener entre 0 y 100 numeros')
    return false;
  }
  return true;
}

function validateNumbers(a) {
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (element !== 0 && element !== 1) {
      console.log('Los valores permitidos son 0 y 1')
      return false;
    }
  }
  return true;
}

solucion(B);