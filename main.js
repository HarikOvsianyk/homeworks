'use strict';

//Task 1

function searchCandidatesByPhoneNumber(num) {
    let arr = [...condidateArr];
    for ( let i = 0; i <= arr.length; i ++) {
        if(arr[i].phone == num) {
            return arr[i];
        }
    }
}

console.log(searchCandidatesByPhoneNumber("+1 (803) 433-2863"));