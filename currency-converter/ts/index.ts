

const currency = async():Promise<void> => {
    try {
        const currency_data = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const response = await currency_data.json();
        console.table(response.rates)
    } catch (error) {
         console.log(error)
    }
}
currency()