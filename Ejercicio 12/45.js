'use strict';
let nums = [1, 8, 2, 5, 5];
let m = nums[0]; 

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > m) {
        m = nums[i];
    }
}

alert("El mayor es: " + m);