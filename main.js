
//First task
function Emploee (employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname; 
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
}

const employeeObj = new Emploee(employeeArr[2]);
console.log(employeeObj);

//Second task
Emploee.prototype.getFullName = function() {
    return `${this.name} ${this.surname}`;
}
console.log(employeeObj.getFullName());
//Third task
let createEmployeesFromArr = (arr) => {
    let newArr = [];
    for( i = 0; i < arr.length; i++) {
        newArr.push(new Emploee(arr[i]));
    }
    return newArr;
};

const employeeConstructArr = createEmployeesFromArr(employeeArr);
console.log(employeeConstructArr);
//Four task
const getFullNamesFromArr = (arr) => {
    let names = [];
    for ( i = 0; i < arr.length; i++) {
        names.push(arr[i].getFullName());
    }
    return names;
}

console.log(getFullNamesFromArr(employeeConstructArr));
  