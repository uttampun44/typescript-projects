let button = document.querySelectorAll('.button') as NodeListOf<HTMLElement>;
let text = document.getElementById('calculator_text') as HTMLParagraphElement;

let currentExpression: string = '';

button.forEach(calculatorButton => {
    calculatorButton.addEventListener('click', function (): void {
        let buttonValue: string = String(this.getAttribute('value')) || '';

        if (buttonValue === "=") {

            try {
                let result = eval(currentExpression);

                text.innerText = String(result.toLocaleString());
            } catch (error) {
                text.innerText = 'Error';
            }
            currentExpression = '';
        } else if (buttonValue === "AC") {

            text.innerText = '';
            currentExpression = '';
        } else {
            currentExpression += buttonValue;
            text.innerText = currentExpression;
        }
    });
});

