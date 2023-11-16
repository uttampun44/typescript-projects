
let button = document.querySelectorAll('.button') as NodeListOf<HTMLElement>;
let text = document.getElementById('calculator_text') as HTMLParagraphElement;



button.forEach(calculatorButton => {
    calculatorButton.addEventListener('click', function():void {

      let buttonValue = this.getAttribute('value');

      if(buttonValue === "0"){
         text.innerText = "0";
      }
    })
})
