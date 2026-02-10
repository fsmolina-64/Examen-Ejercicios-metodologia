'use strict';
let world = ['s','o','n','a','c','n','e','u','c'];
let invertido = [];

for (let i = world.length - 1; i >= 0; i--) {
    invertido.push(world[i]);
}

alert("Invertido: " + invertido.join(""));