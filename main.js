'use strict';
//Task 1
const button = document.querySelector('.button');
const style = document.querySelector('style');
let answer = +prompt('Введите любое целое число', 1);
for (let i = 1; i <= answer; i++) {
    let input = document.createElement('input');
    input.setAttribute('class', 'input-item');
    input.setAttribute('value', `Input ${i}`);
    if (i == answer) {
        input.classList.add('margin-zero');
    } 
    if (i%2) {
        let newClass = document.createTextNode('.yellow{background-color: yellow;}');
        style.append(newClass);
        input.classList.add('yellow');
    }
    if (!(i%3)) {
        input.removeAttribute('value');
        input.setAttribute('placeholder', 'some text')
    }
    button.before(input);
}

//Task 2
const form = document.querySelector('form');
const h2 = document.createElement('h2');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
btn1.textContent = 'Start';
btn2.textContent ='Stop';
form.after(btn2);
form.after(btn1);
btn1.addEventListener('click', () => {timer = setInterval(clock, 1000);
return});
btn2.addEventListener('click', () => clearInterval(timer));
function clock() {
    let timer = new Date().toLocaleTimeString();
    h2.textContent = `${timer}`;
    form.after(h2);
}
let timer = setInterval(clock, 1000);

//Task 3
let newWrapper = document.createElement('div');
newWrapper.id = 'wrapper';
newWrapper.innerHTML = `
<div id="footer">
<h1>Footer</h1>
</div>
<div id="main">
<p>I am first paragraph</p>
<p>I am second paragraph</p>
<p>I am last paragraph</p>
</div>`
btn2.after(newWrapper);

function changeColor() {
    let main = document.querySelector('#main')
    let lastChild = main.lastElementChild;
    lastChild.style.backgroundColor = "red";
}

changeColor();

function changePlace() {
    let footer = document.querySelector('#footer');
    main.append(footer);
}

changePlace();


//Task 4


let div2 = document.createElement('div');
div2.innerHTML = `
<h1>Menu</h1> 
<ul id="menu">
<li>cocoa</li>
<li>cappuccino</li>
<li>smoothie</li>
<li>matcha frappe</li>
</ul>
`
newWrapper.after(div2);
function getOl() {
    div2.addEventListener('click', (e) => {
        if (e.target.className == 'active') {
            e.target.removeAttribute('class');
            /* e.target.removeChild(e.target.children[0]); */
            let ol = document.querySelector('ol');
            ol.remove();
        } else {
            e.target.classList.add('active');
            for (let key in INGREDIENTS) {
                if (key == e.target.innerText) {
                    let ol = document.createElement('ol');
                    e.target.append(ol);
                    INGREDIENTS[key].forEach((item) => {
                        let li = document.createElement('li');
                        li.innerText = `${item}`;
                        ol.append(li);
                    });
                }
            }
        }

    });
}

getOl();