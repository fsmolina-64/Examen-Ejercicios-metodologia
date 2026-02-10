'use strict';
let nums = [0, 0, 0, 0];
let x = 1;

nums[nums.length - 1] = x;           

for (let i = nums.length - 2; i >= 0; i--) {
    nums[i] = nums[i + 1] * 2;
}

alert("Resultado: " + nums.join(", "));