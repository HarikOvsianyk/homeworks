'use strict';

let arrayEvents = [
    {start: 0, duration:15, title: "Exercise", color: '#E2ECF5'},
    {start: 25, duration:30, title: "Travel to work", color: '#E2ECF5'},
    {start: 30, duration:30, title: "Plan day", color:'#E2ECF5'},
    {start: 60, duration:15, title: "Review yesterday`s commits", color:'#E2ECF5'},
    {start: 100, duration:15, title: "Code review", color:'#E2ECF5'},
    {start: 180, duration:90, title: "Have lunch with John", color:'#E2ECF5'},
    {start: 360, duration:30, title: "Skype call", color:'#E2ECF5'},
    {start: 370, duration:45, title: "Follow up with designer", color:'#E2ECF5'},
    {start: 405, duration:30, title: "Push up branch", color:'#E2ECF5'},
];


function renderCalendar() {
    const timeSlot = document.querySelectorAll('.card');
    let cards = Array.from(timeSlot).map(item => item.id);

    arrayEvents.forEach(item => {
            cards.forEach(i => {
                if (i == item.start) {
                    createEvent(i,item);
                }
        
                if (i != item.start) {
                    let remainder = item.start%30;
                    let start = item.start - remainder;
                    let zIndex = 1;
                    if (i == start) {
                        createEvent(i,item,remainder, zIndex);
                    }
                }
            })
    })
}

renderCalendar();


function createEvent (i,item,reminder = 0, zIndex = 0) {
    let card = document.getElementById(`${i}`);
    let event = card.querySelector('.card__event');
    let newEvent = document.createElement('div');
    newEvent.className = 'event';
    newEvent.style.width = `200px`;
    newEvent.style.zIndex = zIndex;
    newEvent.style.border = '2px solid grey';
    newEvent.style.height = `${item.duration*4}px`;
    newEvent.style.backgroundColor = item.color;
    newEvent.style.position = 'relative';
    newEvent.style.top = `${reminder*4}px`;
    newEvent.innerHTML = `<p>${item.title}</p>`;
    event.append(newEvent);
};

function cleanEvents() {
    const cardsevent = document.querySelectorAll('.card__event');
    let arr = Array.from(cardsevent).forEach(item => item.innerHTML = '');
}

function formEvent() {
    let form = document.forms.add;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let timeForm = document.getElementById('time');
        let durationForm = document.getElementById('duration');
        if (durationForm.value == 0) {
            form.reset();
            return
        } else {
            let eventForm = document.getElementById('event');
            let colorForm = document.getElementById('bg');
            let timeArr = timeForm.value.split(':');
            let durAmount = durationForm.value;
            function getStart(timeArr) {   
                let start = parseInt(timeArr[0])*60 + parseInt(timeArr[1]) - 480;
                return start;
            }
    
            function getDuration(durAmount) {
                let duration = parseInt(durAmount);
                return duration;
            }
    
            let start = getStart(timeArr);
            let durationVal = getDuration(durAmount);
    
            arrayEvents.push({
                start: start,
                duration: durationVal,
                title: eventForm.value,
                color: colorForm.value
            });
            form.reset();
            cleanEvents();
            renderCalendar();
            changeEvent();
            deleteEvent();
        }
    })
}

formEvent();

function deleteEvent() {
    const cardsevent = document.querySelectorAll('.card__event');
    let arr =  Array.from(cardsevent);
    arr.forEach(item => {
        let eventArr = item.querySelectorAll('.event');
        let event = Array.from(eventArr);
        event.forEach(item => {
            item.addEventListener('dblclick', (e) => {
                let obj = arrayEvents.find(item => item.title == e.target.textContent);
                let index = arrayEvents.indexOf(obj);
                arrayEvents.splice(index,1);
                item.remove();
                cleanEvents();
                renderCalendar();
            });
        })
    })
};

deleteEvent();

function changeEvent () {
    const cardsevent = document.querySelectorAll('.card__event');
    let arr =  Array.from(cardsevent);
    arr.forEach(item => {
        let eventArr = item.querySelectorAll('.event');
        let event = Array.from(eventArr);
        event.forEach(item => {
            item.addEventListener('click', (e) => {
                let obj = arrayEvents.find(item => item.title == e.target.textContent);
                let index = arrayEvents.indexOf(obj);
                arrayEvents.splice(index,1);
                let timeForm = document.getElementById('time');
                let durationForm = document.getElementById('duration');
                let eventForm = document.getElementById('event');
                let colorForm = document.getElementById('bg');
                let start = obj.start;
                let minutes = start%30;
                let allminutes = (start - minutes) + 480;
                let leftOfminutes = allminutes%60;
                let realHour = (allminutes - leftOfminutes)/60 + '';
                let realMinutes = leftOfminutes + minutes + '';
                timeForm.value = `${realHour.padStart(2,0)}:${realMinutes.padStart(2,0)}`;
                durationForm.value = obj.duration;
                eventForm.value = obj.title;
                colorForm.value = obj.color;
            });
        })
    })
};

changeEvent();



