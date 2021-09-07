'use strict';

//Task 1

function searchCandidatesByPhoneNumber(phone) {
    return condidateArr.filter(el => el.phone.match(/\d/gi).join('').includes(phone.match(/\d/gi).join('')));
}
console.log(searchCandidatesByPhoneNumber('43'));


/* как вариант для поиска с пробелами
function searchCandidatesByPhoneNumber(phone) {
    return condidateArr.filter(el => el.phone.includes(phone));
}
console.log(searchCandidatesByPhoneNumber('+1 (803) 433-2863'));
*/


//Task 2

function getCandidateById(id) {
    const condidate = condidateArr.find(el => el._id == id);
    condidate.registered = condidate.registered.slice(0,10).split('-').reverse().join('/');
    return condidate;
}

console.log(getCandidateById("5e216bc9a6059760578aefa4")); 

//Task 3

function sortCandidatesArr(sortBy) {
    const up   = 'asc',
          down = 'desc';
    condidateArr.forEach(el => 
        el.balance = el.balance.match(/\d/gi).join(''));

    if( sortBy == up) {
        condidateArr.sort((a,b) => {
            return a.balance - b.balance
        })
        return condidateArr;
    } else if (sortBy == down) {
        condidateArr.sort((a,b) => {
           return b.balance - a.balance
        })
        return condidateArr;
    } else {
        return condidateArr;
    }
}

console.log(sortCandidatesArr('asc'));


//Task 4

const eyeColors = condidateArr.map(cand => cand.eyeColor).filter((cand, i, arr) => arr.indexOf(cand) === i);
console.log(eyeColors);

const result = eyeColors.reduce((acc, eyeColor) => {
    acc[eyeColor] = condidateArr.filter(cand => cand.eyeColor === eyeColor);
    return acc;
}, {});

console.log(result);

// получить имя и почту
const result2 = condidateArr
    .filter(cand => cand.age >=25 && cand.age <= 30)
    .map(({name:fullName, email}) => ({fullName, email}));

console.log(result2);

//через reduce

const result3 = condidateArr.reduce((acc, cand) => {
    if (cand.age >=25 && cand.age <= 30) {
        return [...acc, {cand}];
    }
    return acc;
}, [])



