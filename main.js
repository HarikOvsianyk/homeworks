'use strict';

const button = document.querySelector('.button');
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
}