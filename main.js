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

