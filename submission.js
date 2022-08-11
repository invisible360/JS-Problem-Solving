//Solution: 1
function radianToDegree(radian) {

    //validation of the Number
    if (typeof radian !== 'number') {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type a valid Number.';
    }

    //radianToDegree calculation
    else {
        const degree = radian * (180 / Math.PI); // radian to Degree conversion formula

        //toFixed() method return STRING with 2 decimal points, that's why parseFloat is used to convert it in number.  
        const degree2DecimalPoint = parseFloat(degree.toFixed(2));
        return degree2DecimalPoint;
    }
}


//Solution: 2
function isJavaScriptFile(fileName) {

    //Validation of input
    if (typeof fileName !== 'string') {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type a valid File Name';
    }

    //file extension checking
    else if (fileName.endsWith('.js')) {
        return true;
    }

    else {
        return false;
    }
}


//Solution: 3
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


//Solution: 4
function publicBusFare(numberOfPeople) {

    //Number Validatiion
    if (typeof numberOfPeople !== 'number') {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type a valid Number.';
    }

    //Fare Calculation
    else {
        const privateBusCapacity = 50;
        const microBusCapacity = 11;

        const numberOfPrivateBusRequired = Math.floor(numberOfPeople / privateBusCapacity);
        const peopleSeatedInPrivateBus = numberOfPrivateBusRequired * 50;
        const remainingPeopleAfterPrivateBus = numberOfPeople - peopleSeatedInPrivateBus;
        const numberOfMicroBusBusRequired = Math.floor(remainingPeopleAfterPrivateBus / microBusCapacity);
        const peopleSeatedInMicroBus = numberOfMicroBusBusRequired * 11;
        const remainingPeopleAfterMicroBus = remainingPeopleAfterPrivateBus - peopleSeatedInMicroBus;
        const publicBusFare = remainingPeopleAfterMicroBus * 250;

        return publicBusFare;
    }

}


//Solution: 5
function isBestFriend(friend1, friend2) {

    //validation
    if ((typeof friend1 !== 'object') || (typeof friend2 !== 'object') || (Array.isArray(friend1) === true) || (Array.isArray(friend2) === true)) {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type a valid Object with 2 property: Name & friend [Having additional properties won\'t use for comparison]';
    }

    //bestFriend comparison
    else if ((friend1.name === friend2.friend) && (friend1.friend === friend2.name)) {
        return true;
    }
    else {
        return false;
    }

}