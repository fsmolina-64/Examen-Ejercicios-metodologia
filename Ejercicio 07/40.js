'use strict';
let world = ['o','ñ','e','l','i','u','q','a','y','a','u','g'];
let invertido = [];

for (let i = world.length - 1; i >= 0; i--) {
    invertido.push(world[i]);
}

alert("Invertido: " + invertido.join(""));