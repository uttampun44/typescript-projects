"use strict";
let button = document.querySelectorAll('.button');
let text = document.getElementById('calculator_text');
let currentExpression = '';
button.forEach(calculatorButton => {
    calculatorButton.addEventListener('click', function () {
        let buttonValue = String(this.getAttribute('value')) || '';
        if (buttonValue === "=") {
            try {
                let result = eval(currentExpression);
                text.innerText = String(result.toLocaleString());
            }
            catch (error) {
                text.innerText = 'Error';
            }
            currentExpression = '';
        }
        else if (buttonValue === "AC") {
            text.innerText = '';
            currentExpression = '';
        }
        else {
            currentExpression += buttonValue;
            text.innerText = currentExpression;
        }
    });
});
