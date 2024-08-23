"use strict";
let radioButton = document.querySelectorAll('.menuList input[type="radio"]');
radioButton.forEach(btn => {
    btn.addEventListener("click", (val) => {
        let inputValue = parseFloat(btn.value,to);
        let tax = 0.13;
        console.log(`Button value ${inputValue}  `);
    });
});
