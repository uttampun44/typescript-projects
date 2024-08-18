

let  btn = document.querySelector('#btn') as HTMLButtonElement;

function bmi(e: MouseEvent):void{

    let height = document.querySelector('#height') as HTMLInputElement;
    let weight = document.querySelector('#weight') as HTMLInputElement;
    let heighError = document.querySelector('#heightError') as HTMLParagraphElement;
    let weightError = document.querySelector('#weightError') as HTMLParagraphElement;


  
    if(!btn && !weight && !height) return

    const heightValue = Number(height.value);
    const weightValue = Number(weight.value);


    const results =   (weight:number, height:number):number =>{

        return weight/ Math.pow(height, 2)
    }
 
  

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

    let result = document.createElement('div') as HTMLDivElement
    result.style.width = "200px";
    result.style.height = "auto";
    result.style.backgroundColor = "#3F678C";
    result.style.color = "white";
    result.style.padding = "10px 6px";
    result.style.marginTop = "10px";
    result.style.borderRadius = "1.3em"
    result.textContent = `The height is ${height.value} and the weight is ${weight.value}`;
  
    let checkResultDiv = btn.parentElement;

    
    checkResultDiv?.insertAdjacentElement('afterend', result);

    
    e.preventDefault()
   
    console.log(`The height is ${height.value} and the weight is ${weight.value}`)
   
}

btn?.addEventListener('click', bmi);

