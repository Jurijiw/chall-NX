/*se sabe que las monedas tienen cara y seca. Realizar una funcion en la que a partir de una matriz se sepa cual es la cantidad minima de monedas a dar vuelta a fin de que queden alternadas
Ejemplo: Dado A=[1,0,1,1,1] en ese caso es necesario voltear 1 sola moneda en la posicion 3 del array.
La cantidad maxima de datos en un arreglo va de 0 a 100
*/
const A = [0,1,0,0,0,0,0,0];
const B = [20,1,1,0,0];

function solucion(a) {
    let incorrectArrayLength = false;
    incorrectArrayLength = validateArrayLength(a);
    
    if (incorrectArrayLength == false) {

        let invalidNumbers = false;
        invalidNumbers = validateNumbers(a);
        
        let changesCount = 0;

        if (invalidNumbers == false) {
            if (a[0] == 1) {
                changesCount = verifyNumber(a, 1, 0);
            } else {
                changesCount = verifyNumber(a, 0, 1);
            }
            console.log('Cambios necesarios: ', changesCount)
        }

    } else {
        console.log('Intente nuevamente');
    }
}

function validateArrayLength(a) {
    if(a.length < 0 || a.length > 100) {
        console.log('La matriz debe contener entre 0 y 100 numeros') 
        return true;
    }
    return false;
}

function validateNumbers(a) {
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (element !== 0 && element !== 1) {
            console.log('Los valores permitidos son 0 y 1')
            return true;
        }
    }
    return false;
}

function verifyNumber(a, num1, num2) {
    let changesCount = 0;
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (index % 2 == 0 && element !== num1) {
            changesCount ++;
        }
        if (index % 2 !== 0 && element !== num2) {
            changesCount ++;
        }
    }
    return changesCount;
}

solucion(A);