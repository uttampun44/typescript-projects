"use strict";
let btn = document.querySelector('#btn');
function bmi(e) {
    let height = document.querySelector('#height');
    let weight = document.querySelector('#weight');
    let heighError = document.querySelector('#heightError');
    let weightError = document.querySelector('#weightError');
    if (!btn && !weight && !height)
        return;
    const heightValue = Number(height.value);
    const weightValue = Number(weight.value);
    const results = (weight, height) => {
        return weight / Math.pow(height, 2);
    };
    // let isValid = true;
    // if(isNaN(heightValue) && heightValue <= 0)
    // {
    //    weightError.innerText == "Only Accept Number"
    //    isValid = false
    // }else {
    //     weightError.innerText = "";
    // }
    // if(isNaN(weightValue)  && weightValue <=0 ){
    //     heighError.innerText == "Only Accept Number"
    //     isValid = false
    // }else{
    //     heighError.innerText = ""
    // }
    // if (!isValid) {
    //     return; 
    // }
    const bmi = results(weightValue, heightValue);
    const formattedBmi = bmi.toFixed(2); // Format to 2 decimal places
    // Log the BMI calculation
    console.log('Calculated BMI:', bmi);
    console.log('Formatted BMI:', formattedBmi);
    let result = document.createElement('div');
    result.style.width = "200px";
    result.style.height = "auto";
    result.style.backgroundColor = "#3F678C";
    result.style.color = "white";
    result.style.padding = "10px 6px";
    result.style.marginTop = "10px";
    result.style.borderRadius = "1.3em";
    result.textContent = `The height is ${height.value} and the weight is ${weight.value}`;
    let checkResultDiv = btn.parentElement;
    checkResultDiv === null || checkResultDiv === void 0 ? void 0 : checkResultDiv.insertAdjacentElement('afterend', result);
    e.preventDefault();
    console.log(`The height is ${height.value} and the weight is ${weight.value}`);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', bmi);
