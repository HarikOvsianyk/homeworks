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
        return makeDinner();
    }
})
.then((response) => {console.log(response);
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

//Task 3
let container = document.querySelector('.container');
function getArray(...arr) {
            let data = `https://rickandmortyapi.com/api/character/`+`${arr}`
            fetch(data)
        .then((response) =>
            response.json())   
        .then((data) => {
            container.innerHTML = '';
            if (!(Array.isArray(data))) {
                data.results.forEach(item => createCard(item))
            } else {
                data.forEach(item => createCard(item));
            }  
        });
}
getArray(1,2,3,4,5,6,7,8,9,10);

function getFilter() {
    let form = document.querySelector('.form-container');
    form.addEventListener('click', (e) => {
        if (e.target.id == 'male' || e.target.id == 'female') {
            let arr = `?gender=${e.target.id}`;
            getArray(arr);
        }
        if (e.target.id == 'alive' || e.target.id == 'dead') {
            let arr = `?status=${e.target.id}`;
            getArray(arr);
        }
    })

}
getFilter();

function createCard(item) {
    let classRes
    if (item.status == 'Alive') {
        classRes = 'live-status'
    } 
    if (item.status == 'Dead') {
        classRes = 'live-status dead'
    };
    container.innerHTML += `
<div class="card">
    <div class="card-info">
        <div class="title">
            <h1>${item.name}</h1>
            <div class="status">
                <div class="${classRes}"></div>
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
</div>`
}

