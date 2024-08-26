"use strict";
let radioButton = document.querySelectorAll('.menuList input[type="radio"]');
let numberPerson = document.querySelector('#numberOfPerson');
let calculateBtn = document.querySelector('#calculateButton');
let totalbill = document.querySelector('.tax_included_btn .yourTotal');
radioButton.forEach(btn => {
    btn.addEventListener("click", (val) => {
        let inputValue = Number(btn.value);
        let vat = 0.13;
        calculateBtn.addEventListener("click", () => {
            let persons = parseInt(numberPerson.value, 10);
            if (isNaN(persons) || persons <= 0)
                return alert("Enter person");
            let totalWithoutVAT = (inputValue + inputValue) * persons;
            console.log(`Total amount without vat ${totalWithoutVAT}`);
            let vatAmount = totalWithoutVAT * vat;
            let totalWithVAT = totalWithoutVAT + vatAmount;
            totalbill.innerText = totalWithVAT.toString();
            console.log("Total with VAT:", totalWithVAT);
        });
    });
});
