'use strict';
let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
    let linea = "";
    for (let j = i + 1; j < nums.length; j++) {
        let numero = nums[i].toString().padStart(2, "0") + 
                     nums[j].toString().padStart(2, "0");
        linea = linea + numero + " ";
    }
    if (linea !== "") {
        alert(linea.trim());
    }
}