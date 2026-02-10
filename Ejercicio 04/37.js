'use strict';
let nums = [2, 3, 6, 5, 0];
let x = 7;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === x) {
            alert("índice " + i + " e índice " + j);
        }
    }
}