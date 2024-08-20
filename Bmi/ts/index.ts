let btn = document.querySelector("#btn") as HTMLButtonElement;

function bmi(e: MouseEvent): void {
  let height = document.querySelector("#height") as HTMLInputElement;
  let weight = document.querySelector("#weight") as HTMLInputElement;

  if (!btn && !weight && !height) return;

  const heightValue: number = parseInt(height.value);
  const weightValue: number = parseInt(weight.value);

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

  let result = document.createElement("div") as HTMLDivElement;
  let paragraphTag = document.createElement("p") as HTMLParagraphElement;
  let paraDetail = document.createElement("p") as HTMLParagraphElement;
  let bmiResultText = document.createElement("p") as HTMLParagraphElement;

  result.appendChild(paragraphTag);
  result.appendChild(bmiResultText);

  if (parseInt(bmi) < 18.5) {
    bmiResultText.textContent = "You are under weight";
  } else if (parseInt(bmi) > 18.5 && parseInt(bmi) < 24.9) {
    bmiResultText.textContent = "You are Fit";
  } else if (parseInt(bmi) > 25 && parseInt(bmi) < 30) {
    bmiResultText.textContent = "You are overweight";
  } else if (parseInt(bmi) > 30) {
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
  result.style.textAlign = "center"
  result.style.fontSize = '1.5rem'

  let checkResultDiv = btn.parentElement;

  checkResultDiv?.insertAdjacentElement("afterend", result);

  e.preventDefault();

  console.log(
    `The height is ${height.value} and the weight is ${weight.value}`
  );
}

btn?.addEventListener("click", bmi);
