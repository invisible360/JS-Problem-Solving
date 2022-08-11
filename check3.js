//Problem: 3
function oilPrice(diselAmount, petrolAmount, octaneAmount) {

    // validation of Disel Amount
    if ((typeof diselAmount !== 'number') || (typeof petrolAmount !== 'number') || (typeof octaneAmount !== 'number')) {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type valid 3 Amount in Liter';
    }

    //total price calculation
    else {
        //Per liter Fuel Price
        const perLiterDiselPrice = 114;
        const perLiterPetrolPrice = 130;
        const perLiterOctanePrice = 135;

        //Total price of individual fuel
        const totalDiselPrice = perLiterDiselPrice * diselAmount;
        const totalPetrolPrice = perLiterPetrolPrice * petrolAmount;
        const totalOctanePrice = perLiterOctanePrice * octaneAmount;

        //Total Price 
        const totalPriceOfTheFuel = totalDiselPrice + totalPetrolPrice + totalOctanePrice;

        return totalPriceOfTheFuel;
    }
}

const totalPrice = oilPrice(30, 20, 10);
console.log(totalPrice);

