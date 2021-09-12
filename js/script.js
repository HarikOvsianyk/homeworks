'use strict';

let arrayEvents = [
    {start: 0, duration:15, title: "Exercise"},
    {start: 25, duration:15, title: "Travel to work"},
    {start: 30, duration:15, title: "Plan day"},
    {start: 60, duration:15, title: "Review yesterday`s commits"},
    {start: 100, duration:15, title: "Code review"},
    {start: 180, duration:15, title: "Have lunch with John"},
    {start: 360, duration:15, title: "Skype call"},
    {start: 370, duration:15, title: "Follow up with designer"},
    {start: 405, duration:15, title: "Push up branch"},
];


const timeSlot = document.querySelectorAll('.card');
let cards = Array.from(timeSlot).map(item => item.id);

arrayEvents.forEach(item => {
    cards.forEach(i => {
        if (i == item.start) {
            console.log(item);
           createEvent(item);
        }
    })
})



function createEvent(item) {
    let card__event = document.querySelector('.card__event');
    card__event.innerHTML = `
    <p>${item.title}</p>
   `
}