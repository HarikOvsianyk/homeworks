'use strict';

//Task 1

function searchCandidatesByPhoneNumber(phone) {
    phone = phone.match(/\d/gi).join('');
    return condidateArr.filter(el => el.phone.match(/\d/gi).join('').includes(phone));
}
console.log(searchCandidatesByPhoneNumber('43'));

//Task 2

function getCandidateById(id) {
    let condidate = condidateArr.find(el => el._id == id);
    condidate.registered = condidate.registered.slice(0,10).split('-').reverse().join('/');
    return condidate;
}

console.log(getCandidateById("5e216bc9a6059760578aefa4")); 




