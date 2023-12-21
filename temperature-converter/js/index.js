"use strict";
let value_text = document.querySelector('#value');
let check_value = document.querySelector('#check-value');
let select_option = document.querySelector("#select-option");
let user_input = document.querySelector("#user_input");
// function to calculate the value and display
const displayValue = () => {
    if (user_input) {
        const inputVal = parseFloat(user_input.value);
        const farenhite = (inputVal * 9 / 5) + 32;
        value_text.innerText = ` Farenhite Value : ${farenhite.toString()}`;
    }
};
// select event
select_option.addEventListener("change", () => {
    user_input.value = "";
    value_text.innerText = "";
});
// click to show the value
check_value.addEventListener("click", function () {
    displayValue();
});
