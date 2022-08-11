//Problem: 4
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
        const publicBusFareForPerPerson = 250;

        const numberOfPrivateBusRequired = Math.floor(numberOfPeople / privateBusCapacity);
        const peopleSeatedInPrivateBus = numberOfPrivateBusRequired * privateBusCapacity;
        const remainingPeopleAfterPrivateBus = numberOfPeople - peopleSeatedInPrivateBus;
        const numberOfMicroBusBusRequired = Math.floor(remainingPeopleAfterPrivateBus / microBusCapacity);
        const peopleSeatedInMicroBus = numberOfMicroBusBusRequired * microBusCapacity;
        const remainingPeopleAfterMicroBus = remainingPeopleAfterPrivateBus - peopleSeatedInMicroBus;
        const publicBusFare = remainingPeopleAfterMicroBus * publicBusFareForPerPerson;

        return publicBusFare;
    }

}

const totalPublicBusFare = publicBusFare(23, 33);
console.log(totalPublicBusFare);

