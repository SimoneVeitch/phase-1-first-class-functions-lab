const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const firsttwo = selectingDrivers[0](drivers);
const lasttwo = selectingDrivers[1](drivers);

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
}

