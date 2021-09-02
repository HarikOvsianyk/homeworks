'use strict';
//Task 1
/* const button = document.querySelector('.button');
let answer = +prompt('Введите любое целое число', 1);
for (let i = 1; i <= answer; i++) {
    let input = document.createElement('input');
    input.setAttribute('class', 'input-item');
    input.setAttribute('value', `Input ${i}`);
    if (i == answer) {
        input.classList.add('margin-zero');
    } 
    if (i%2) {
        input.classList.add('yellow');
    }
    if (!(i%3)) {
        input.removeAttribute('value');
        input.setAttribute('placeholder', 'some text')
    }
    button.before(input);
} */

//Task 2

const form = document.querySelector('form');
const h2 = document.createElement('h2');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
btn1.textContent = 'Start';
btn2.textContent ='Stop';
form.after(btn2);
form.after(btn1);
btn1.addEventListener('click', () => setInterval(clock, 1000));
btn2.addEventListener('click', () => clearInterval(timer));
function clock() {
    let timer = new Date().toLocaleTimeString();
    h2.innerHTML = `${timer}`;
    form.after(h2);
}
let timer = setInterval(clock, 1000);

