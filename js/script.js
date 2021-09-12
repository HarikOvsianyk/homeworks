'use strict';

let arrayEvents = [
    {start: 0, duration:15, title: "Exercise"},
    {start: 25, duration:15, title: "Exercise"},
    {start: 30, duration:15, title: "Exercise"},
    {start: 60, duration:15, title: "Exercise"},
    {start: 100, duration:15, title: "Exercise"},
    {start: 180, duration:15, title: "Exercise"},
    {start: 360, duration:15, title: "Exercise"},
    {start: 370, duration:15, title: "Exercise"},
    {start: 405, duration:15, title: "Exercise"},
];

const timeSlot = document.querySelectorAll('.card');
let pageEvent = document.querySelector('.card');
let cards = Array.from(timeSlot).map(item => item.id);

arrayEvents.map(item => {
    cards.map(i => {
        if (i == item.start) {
           return createEvent(i);
        }
    })
})

function createEvent(item) {
    pageEvent.innerHTML += `
    <div class="card" id="${item}">
    <div class="card__time" >
        <div class="card__text">5:00</div>
    </div>
    <div class="card__event">
    <p>New text<p></p></div>
</div>
    `
}