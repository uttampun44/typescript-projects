let radioButton = document.querySelectorAll('.menuList input[type="radio"]') as NodeListOf<HTMLInputElement>


radioButton.forEach(btn => {
     btn.addEventListener("click", (val) =>{
        let inputValue:number =  parseInt(btn.value);
        let tax:number = 0.13


        console.log(`Button value ${inputValue}  `)
     })
})