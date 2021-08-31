//First task
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};
const result = [];
for (key in citiesAndCountries) {
    let message = `'${key} - это ${citiesAndCountries[key]}'`;
    result.push(message);
}
console.log(result);

//Second task
function getArray(number){
    if (!(number%3)) {
        const amount = number;
        const mainArr = [];
        let arr = [];
        for (i = 1; i <= amount; i++) {
            if (i % 3 === 0) {
                arr[arr.length] = i;
                mainArr[mainArr.length] = arr;
                arr = [];
                continue;
            }
            arr[arr.length] = i;
        }
        return mainArr;
    } 
    return console.log('Веедите число кратное 3')
}

console.log(getArray(300));

//Third task
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday' , 'Sunday'],
}

function getNameOfDay(lang, day){
    return namesOfDays[lang][day-1];
}

console.log(getNameOfDay('en', 3));

//Fourth task
const arr1 = [12, 898, 899, 900];
function getSum(arr) {
    if (arr.length < 4) {
        console.log('Длинна массива должна быть не менее 4');
    } else if(!(arr.every(item => Number.isInteger(item)))) {
        return console.log('Введите целое число!');
    } else if (!(arr.every(item => item > 0))) {
        return console.log('Введите положительное число!')
    } else {
        return arr.slice().sort((a, b) => a - b).slice(0,2).reduce((a,b) => a + b);
    } 
}
console.log(getSum(arr1));
//Fifth task
let arr = [1, 1, 1, 0, 0, 1];
function getNumber(arr) {
    let str = arr.join('');
    let res = parseInt(str,2);
    return res;
}

console.log(getNumber(arr));




