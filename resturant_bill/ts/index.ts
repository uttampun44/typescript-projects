let radioButton = document.querySelectorAll('.menuList input[type="radio"]') as NodeListOf<HTMLInputElement>
let numberPerson = document.querySelector('#numberOfPerson') as HTMLInputElement
let calculateBtn = document.querySelector('#calculateButton') as  HTMLButtonElement
let totalbill = document.querySelector('.tax_included_btn .yourTotal') as HTMLSpanElement;


radioButton.forEach(btn => {
     btn.addEventListener("click", (val) =>{

      
        let inputValue:number =  Number(btn.value);
        let vat:number = 0.13

        calculateBtn.addEventListener("click", () =>{
         let persons:number =  parseInt(numberPerson.value, 10)

         if(isNaN(persons) || persons <= 0) return alert("Enter person")

            let totalWithoutVAT = (inputValue + inputValue) * persons;
    
            console.log(`Total amount without vat ${totalWithoutVAT}`)
         
            let vatAmount = totalWithoutVAT * vat;
            
        
            let totalWithVAT = totalWithoutVAT + vatAmount;

            totalbill.innerText = totalWithVAT.toString()
        
            console.log("Total with VAT:", totalWithVAT);
        })
     })
})

