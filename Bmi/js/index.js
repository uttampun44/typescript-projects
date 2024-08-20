"use strict";
let btn = document.querySelector("#btn");
function bmi(e) {
    let height = document.querySelector("#height");
    let weight = document.querySelector("#weight");
    if (!btn && !weight && !height)
        return;
    const heightValue = parseInt(height.value);
    const weightValue = parseInt(weight.value);
    if (isNaN(heightValue) && heightValue <= 0) {
        alert("Please enter valid height");
    }
    if (isNaN(weightValue) && weightValue <= 0) {
        alert("Please enter valid weight");
    }
    const results = weightValue / Math.pow(heightValue / 100, 2);
    const bmi = results.toFixed(1);
    console.log("Calculated BMI:", results);
    console.log("Bmi result", bmi);
    let result = document.createElement("div");
    let paragraphTag = document.createElement("p");
    let paraDetail = document.createElement("p");
    let bmiResultText = document.createElement("p");
    result.appendChild(paragraphTag);
    result.appendChild(bmiResultText);
    if (parseInt(bmi) < 18.5) {
        bmiResultText.textContent = "You are under weight";
    }
    else if (parseInt(bmi) > 18.5 && parseInt(bmi) < 24.9) {
        bmiResultText.textContent = "You are Fit";
    }
    else if (parseInt(bmi) > 25 && parseInt(bmi) < 30) {
        bmiResultText.textContent = "You are overweight";
    }
    else if (parseInt(bmi) > 30) {
        bmiResultText.textContent = "You are obesity";
    }
    result.style.width = "100%";
    result.style.height = "auto";
    result.style.backgroundColor = "#3F678C";
    result.style.color = "white";
    result.style.padding = "10px 6px";
    result.style.marginTop = "10px";
    result.style.borderRadius = "1.3em";
    paragraphTag.textContent = `Your BMI is ${bmi}`;
    result.style.textAlign = "center";
    result.style.fontSize = '1.5rem';
    let checkResultDiv = btn.parentElement;
    checkResultDiv === null || checkResultDiv === void 0 ? void 0 : checkResultDiv.insertAdjacentElement("afterend", result);
    e.preventDefault();
    console.log(`The height is ${height.value} and the weight is ${weight.value}`);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", bmi);
