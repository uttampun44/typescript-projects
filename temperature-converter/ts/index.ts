
let value_text = document.querySelector('#value') as HTMLParagraphElement;
let check_value = document.querySelector('#check-value') as HTMLButtonElement;
let select_option = document.querySelector("#select-option") as HTMLSelectElement;
let user_input = document.querySelector("#user_input") as HTMLInputElement;


const selectOption = ():void => {
    const selectElement = select_option.value;

    if (selectElement === "celsius") {
        console.log(selectElement)
        const  farenhiteVal: number | bigint = parseFloat(user_input.value);

         const farenhite = (farenhiteVal -32 ) * 5/9;
         value_text.innerText = ` Farenhite Value : ${farenhite.toString()}°F`;
        user_input.placeholder = "Please enter the farenhite";

    }else if(selectElement === "farenhite"){
        console.log(selectElement)
        const celsiusVal:number | bigint = parseFloat(user_input.value);
        const celsius =  (celsiusVal * 9/5) + 32;
        value_text.innerText = `Farenhite Value : ${celsius.toLocaleString()}°C`;
        user_input.placeholder = "Please enter the celsius"
    }

}

// click to show the value
check_value.addEventListener("click", selectOption)