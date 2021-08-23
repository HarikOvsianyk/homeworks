'use strict';

//Task 1

function searchCandidatesByPhoneNumber(phone) {
    phone = phone.match(/\d/gi).join('');
    return condidateArr.filter(el => el.phone.match(/\d/gi).join('').includes(phone));
}
console.log(searchCandidatesByPhoneNumber('43'));


