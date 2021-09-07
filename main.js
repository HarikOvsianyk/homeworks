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
/* function goToShop() {
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
ProductError.prototype = Error.prototype; */

//Task 3
let container = document.querySelector('.container');
function createCard(item) {
    container.innerHTML += `<div class="card">
    <div class="card-info">
        <div class="title">
            <h1>${item.name}</h1>
            <div class="status">
                <div class="live-status"></div>
                <p>${item.species} - ${item.status}</p>
            </div>
        </div>
        <div class="content">
            <p>${item.location.name}</p>
        </div>
    </div>
    <div class="card-image">
        <img src="${item.image}" alt="Img">
    </div>
</div>`;
}

function getArray(...arr) {
    let characters = `https://rickandmortyapi.com/api/character/${arr}`;
    fetch(characters)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(item =>  createCard(item));;
        });

}

getArray(1,2,3,4,5,6,7,8,9,10);

function getFilter() {
    let male = document.querySelector('#male'),
        female = document.querySelector('#female'),
        alive = document.querySelector('#alive'),
        dead = document.querySelector('#dead');
    male.addEventListener('click',() => {
        let characters = `https://rickandmortyapi.com/api/character/?gender=male`;
        fetch(characters)
            .then((response) => response.json())
            .then((data) => {
                container.innerHTML = '';
                data.results.forEach(item =>  createCard(item));;
            });
    });
    female.addEventListener('click',() => {
        let characters = `https://rickandmortyapi.com/api/character/?gender=female`;
        fetch(characters)
            .then((response) => response.json())
            .then((data) => {
                container.innerHTML = '';
                data.results.forEach(item =>  createCard(item));;
            });
    });
    alive.addEventListener('click',() => {
        let characters = `https://rickandmortyapi.com/api/character/?status=alive`;
        fetch(characters)
            .then((response) => response.json())
            .then((data) => {
                container.innerHTML = '';
                data.results.forEach(item =>  createCard(item));;
            });
    });
    dead.addEventListener('click',() => {
        let characters = `https://rickandmortyapi.com/api/character/?status=dead`;
        fetch(characters)
            .then((response) => response.json())
            .then((data) => {
                container.innerHTML = '';
                data.results.forEach(item =>  createCard(item));;
            });
    })
}

getFilter();


