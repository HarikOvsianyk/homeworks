'use strict';

//Task 1

/* const promise = new Promise((resolve, reject) => {
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
.catch(err => console.log(err)); */

//Task 2
function goToShop() {
    const products = ['apple', 'banana', 'watermelon', 'pineapple'];
    return  Promise.resolve(products);
}

let getShop = goToShop();
getShop
.then((response) => {
    if (response.length < 4) {
        return Promise.reject('Too low products');
    } else {
        let getDinner = makeDinner();
        getDinner
        .then((response) => {
            console.log(response);
        })
        .catch(error => {throw new ProductError(error)});
    }
})
.catch(error => {throw new ProductError(error)});

function makeDinner() {
   return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Bon Appetit');
            reject('Something went wrong')
        },3000)
    })
};

function ProductError(message) {
    this.name = "ProducError";
    this.message = message;
  }
ProductError.prototype = Error.prototype;


