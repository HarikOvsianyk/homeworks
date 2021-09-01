"use strict";

class Student {
    constructor(enrollee) {
        this.id = Student.id++;
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.isSelfPayment = Student.isSelfPayment(this, this.ratingPoint);
    }

    static id = 1;
    static listOfStudents = [];
    static isSelfPayment(obj, point) {
        if (point >= 800) {
            this.listOfStudents.push(obj);
            this.listOfStudents.sort((a,b) => {
              if (a.ratingPoint === b.ratingPoint) {
                return b.schoolPoint - a.schoolPoint;
              } else {
                return b.ratingPoint - a.ratingPoint;
              }    
          });
        } else if (point < 800) {
            this.listOfStudents.push(obj);
        }
        for (let i = 0; i < this.listOfStudents.length; i++) {
            this.listOfStudents[i].isSelfPayment =  i > 4;
        }
    }
}

for (let key in studentArr) {
    new Student(studentArr[key]);
}
console.log(Student.listOfStudents);

