'use strict';

//Task 1

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.floor(Math.random() * (6) + 1);  
        if ( number>=1 && number<=5) {
            console.log('Start the game...');
            resolve(number);
        } else {
            reject('Exit')
        };
    },2000);
});
promise
.then((number) => {
    if (number == 1) {
        console.log('Stay here');
    } else if (number >= 2) {
        console.log(`Go ${number} steps`);
    }
})
.catch(err => console.log(err));
