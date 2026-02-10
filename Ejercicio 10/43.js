'use strict';
let binaryNumber = [0, 1, 0, 1];
let decimal = 0;

for (let i = 0; i < binaryNumber.length; i++) {
    let potencia = binaryNumber.length - 1 - i;
    decimal = decimal + (binaryNumber[i] * Math.pow(2, potencia));
}

alert("El número binario es: " + decimal);