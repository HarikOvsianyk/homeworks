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
    let arr = [];
    for (let key in obj) {
        arr.push(key);
    }
    return arr;
}

console.log(getAllKeys(obj));

//Task 3

function getAllValues(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

console.log(getAllValues(obj));

//Task 4

const condidateArr = [{id: 1,name: 'Kolya'}, {id: 2, name: 'Petya'}];

const obj1 = {
    id: 3,
    name: 'Vasya'
};

const secondObj = {
    id: 4,
    name: 'Katya'
};

function insertIntoArr(obj, id) {
    condidateArr.splice(id - 1, 0 , obj);
    return condidateArr;
}

console.log(insertIntoArr(obj1, 2));
console.log(insertIntoArr(secondObj, 1));

