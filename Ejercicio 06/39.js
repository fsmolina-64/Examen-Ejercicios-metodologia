'use strict'
let name = ['a', 'o', 'l', 'h'];

let auxiliar = name[0];          
name[0] = name[name.length - 1];  
name[name.length - 1] = auxiliar; 

alert("Array después del intercambio: " + name.join(""));