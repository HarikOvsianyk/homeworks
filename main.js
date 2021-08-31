//First task

let arr = ['Buz', 'Fiz', 'FizBuz'];

for (i = 1; i <= 10; i++) {
    if (!(i % 3)) {
        console.log(arr[2])
    } else if (i % 2) {
        console.log(arr[0])
    } else if (!(i % 2)) {
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
if (!(amountBox % 1)) {
    amountBox;
} else if (amountBox % 1) {
    amountBox = amountBox - (amountBox % 1) + 1;
}

console.log(amountBox)

//Four task
const roomsOnFloor = 3;
const floors = 5;
const roomNumber = 111;
let flatsInPorch = roomsOnFloor*floors;
let porchNumber = roomNumber/flatsInPorch;
if (porchNumber <1) {
    porchNumber = 1;
} else if (!(porchNumber % 1)) {
    porchNumber;
} else if (porchNumber % 1) {
    porchNumber = porchNumber - (porchNumber % 1) + 1;
}

const porch = porchNumber;

console.log(porch);
let floorNumber = ((roomNumber - ((porch -1)*(flatsInPorch)))/roomsOnFloor);
if (!(floorNumber % 1)) {
    floorNumber;
} else if (floorNumber % 1) {
    floorNumber = floorNumber - (floorNumber % 1) + 1;
}
const floor = floorNumber;
console.log(floor);

//Five task

const medianNumber = 8;
function pyramid() {
    let output = "";
    for (let i = 1; i < medianNumber; i++) {
        let star = "#".repeat(i*2 - 1);
        let dashes = "_".repeat(medianNumber - i);
        output += dashes + star + dashes + "\n";
    }
    console.log(output);
}

pyramid();