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


