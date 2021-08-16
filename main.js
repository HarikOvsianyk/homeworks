'use strict';

//First task
function getSum() {
  let count = 0;

  return function(num) {
    return count += num;
  }
}

const sum = getSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(228));

//Second task
function getArray() {
  let arr = [];
  return function(option) {
    if (option === undefined) {
      arr = [];
      return arr;
    } else {
      arr.push(option);
      return arr;
    }
  }
}

const getUpdatedArr = getArray();
console.log(getUpdatedArr('5'));
console.log(getUpdatedArr('8'));
console.log(getUpdatedArr({name: 'Vasia'}));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));



