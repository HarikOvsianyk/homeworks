//Task 1

const arr = ['Vasya', 'Petya', 'Alexey'];

function removeUser(arr, index) {
    arr.splice(index, 1);
    return arr;
};

removeUser(arr, 2);
console.log(arr);

//Task 2

const obj = { name: 'Vasya', age: 1};

function getAllKeys(obj) {
    return Object.keys(obj);
}

console.log(getAllKeys(obj));

//Task 3

function getAllValues(obj) {
    return Object.values(obj);
}

console.log(getAllValues(obj));

//Task 4

const condidateArr1 = [{id: 1,name: 'Kolya'}, {id: 2, name: 'Petya'}];

const obj1 = {
    id: 3,
    name: 'Vasya'
};

const secondObj = {
    id: 4,
    name: 'Katya'
};

function insertIntoArr(obj, id) {
    condidateArr1.splice(id - 1, 0 , obj);
    return condidateArr1;
}

console.log(insertIntoArr(obj1, 2));
console.log(insertIntoArr(secondObj, 1));

//Task 5

class Condidate {
    constructor(condidate) {
        Object.assign(this, condidate)
    }
    getState() {
        return this.address.split(',')[2]
    }
}

const condidate = new Condidate(condidateArr[0]);
console.log(condidate);
console.log(condidate.getState());

//Task 6

function getCompanyNames(arr) {
    let newArr = arr.map(item => item.company);
    let uniqArray = [...new Set(newArr)];
    return uniqArray;
}

console.log(getCompanyNames(condidateArr));

//Task 7

function getUserByYear(year) {
    let oldArr = [...condidateArr];
    let newArr = oldArr.filter(item => item.registered.split('-')[0] == year);
    let idArr = newArr.map(item => item._id);
    return idArr;
}

console.log(getUserByYear(2017));

//Task 8

function getCondidatesByUnreadMsg(num) {
    let oldArr = [...condidateArr];
    let arrFromSort = oldArr.filter(item => item.greeting.split(' ')[5] == num);
    return arrFromSort;
}

console.log(getCondidatesByUnreadMsg(8));

//Task 9

function getCondidatesByGender(gender) {
    let oldArr = [...condidateArr];
    let arrFromSort = oldArr.filter(item => item.gender == gender);
    return arrFromSort;
}

console.log(getCondidatesByGender('male'));

