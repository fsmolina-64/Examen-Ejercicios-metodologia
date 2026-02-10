'use strict';
let t = parseInt(prompt("Ingresa el tamaño t:"));
let x = parseInt(prompt("Ingresa el número x:"));

let v = [];

for (let i = 1; i <= t; i++) {
    v.push(x * i);
}

alert("Vector: " + v.join(", "));