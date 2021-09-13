'use strict';

let arrayEvents = [
    {start: 0, duration:15, title: "Exercise"},
    {start: 25, duration:30, title: "Travel to work"},
    {start: 30, duration:30, title: "Plan day"},
    {start: 60, duration:15, title: "Review yesterday`s commits"},
    {start: 100, duration:15, title: "Code review"},
    {start: 180, duration:90, title: "Have lunch with John"},
    {start: 360, duration:30, title: "Skype call"},
    {start: 370, duration:45, title: "Follow up with designer"},
    {start: 405, duration:30, title: "Push up branch"},
];


const timeSlot = document.querySelectorAll('.card');
let cards = Array.from(timeSlot).map(item => item.id);

arrayEvents.forEach(item => {
    cards.forEach(i => {
        if (i == item.start) {
            createEvent(i,item);
        }

        if (i != item.start) {
            let one = item.start%30;
            let two = item.start - one;
            console.log(one);
            if (i == two) {
                let card = document.getElementById(`${i}`);
                let event = card.querySelector('.card__event');
                let newEvent = document.createElement('div');
                newEvent.className = 'event';
                newEvent.style.maxwidth = `200px`;
                newEvent.style.height = `${item.duration*4}px`;
                newEvent.style.backgroundColor = '#E2ECF5';
                newEvent.style.position = 'relative';
                newEvent.style.top = `${one*4}px`;
                newEvent.innerHTML = `<p>${item.title}</p>`;
                event.append(newEvent);
            }
        }
    })
})

function createEvent(i,item) {
    let card = document.getElementById(`${i}`);
    let event = card.querySelector('.card__event');
    let newEvent = document.createElement('div');
    newEvent.className = 'event';
    newEvent.style.height = `${item.duration*4}px`;
    newEvent.style.width = `200px`;
    newEvent.style.backgroundColor = '#E2ECF5';
    newEvent.innerHTML = `<p>${item.title}</p>`;
    event.append(newEvent);
}