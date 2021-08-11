
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

const employeeObj = new Emploee(employeeArr[0]);
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

//Five task
const getMiddleSalary = (arr) => {
    let res = 0;
    for (i = 0; i < arr.length; i ++) {
        res += arr[i].salary;
    }
    return avg = res/arr.length;
};

console.log(getMiddleSalary(employeeConstructArr));

//Six task
const getRandomEmployee = (arr) => {
    return arr[Math.round(Math.random() * arr.length)];
    }
    
console.log(getRandomEmployee(employeeConstructArr));

//Seven task

Object.defineProperty(Emploee.prototype, 'fullInfo', {
    get: function() {
    let arr = [];
    for (let key in this) {
        arr.push(`${key} : ${this[key]}`)
      }
    let newArr = arr.splice(7, arr.length);
    return arr.join(", ");
    },
    set: function(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        } 

    }
});
console.log(employeeObj);
console.log(employeeObj.fullInfo);
employeeObj.fullInfo = {name: 'Вася', salary: 9000};
console.log(employeeObj);



