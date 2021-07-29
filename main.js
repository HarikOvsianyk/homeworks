//First task

let arr = ['Buz', 'Fiz', 'FizBuz'];

for (i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log(arr[2])
    } else if (i % 2 !== 0) {
        console.log(arr[0])
    } else if (i % 2 == 0) {
        console.log(arr[1])
    }
}

//Second Task
let factorial = 10;
let resultFactorial = 1;

    for(i = 1; i <= factorial; i++) {
        resultFactorial = resultFactorial * i;
}
console.log(resultFactorial);

//Third Task
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let amountBox = (consumptionPerWeek / sheetsInReamPaper) * weeksAmount;
if (amountBox % 1 == 0) {
    amountBox;
} else if (amountBox % 1 !== 0) {
    amountBox = amountBox - (amountBox % 1) + 1;
}

console.log(amountBox)

//Four task
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
let flatsInPorch = roomsOnFloor*floors;
let porchNumber = roomNumber/flatsInPorch;
if (porchNumber <1) {
    porchNumber = 1;
} else if (porchNumber % 1 == 0) {
    porchNumber;
} else if (porchNumber % 1 !== 0) {
    porchNumber = porchNumber - (porchNumber % 1) + 1;
}

const porch = porchNumber;

console.log(porch);
let floorNumber = ((roomNumber - ((porch -1)*(flatsInPorch)))/roomsOnFloor);
if (floorNumber % 1 == 0) {
    floorNumber;
} else if (floorNumber % 1 !== 0) {
    floorNumber = floorNumber - (floorNumber % 1) + 1;
}
const floor = floorNumber;
console.log(floor);
