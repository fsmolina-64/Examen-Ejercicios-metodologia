let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
    let linea = "";
    
    for (let j = 0; j < nums.length; j++) {
        if (j >= i) {
            let numero = nums[i].toString().padStart(2, "0") + 
                        nums[j].toString().padStart(2, "0");
            linea += numero + " ";
        }
    }
    
    alert(linea.trim());
}