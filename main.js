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

console.log(getArray(9));

//Third task
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday' , 'Sunday'],
}

function getNameOfDay(){
    const lang = 'en';
    const day = 7;
    return namesOfDays[lang][day-1];
}

console.log(getNameOfDay());

//Fourth task
const arr1 = [12, 898, 899, 900];
function getSum(arr) {
    return arr.slice().sort((a, b) => a - b).slice(0,2).reduce((a,b) => a + b);
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




