"use strict";
let button = document.querySelectorAll('.button');
let text = document.getElementById('calculator_text');
button.forEach(calculatorButton => {
    calculatorButton.addEventListener('click', function () {
        let buttonValue = this.getAttribute('value');
        if (buttonValue === "0") {
            text.innerText = "0";
        }
    });
});
