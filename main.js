'use strict';

//Task 1

function searchCandidatesByPhoneNumber(phone) {
    phone = phone.match(/\d/gi).join('');
    return condidateArr.filter(el => el.phone.match(/\d/gi).join('').includes(phone));
}
console.log(searchCandidatesByPhoneNumber('+1 (803) 433-2863'));

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
    condidateArr.forEach(el => {
        let balance = el.balance.match(/\d/gi).join('');
        el.balance = balance;
    });

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




