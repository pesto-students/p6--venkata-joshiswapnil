/*
Create an object called
Teacher derived from the Person class, 
and implement a method called teach which receives a string called subject, and
prints out:[teacher's name]is now teaching[subject]

*/

var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach

function Teacher() { }

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

var TeacherObj1 = new Teacher();
TeacherObj1.initialize("Adam", 45);
TeacherObj1.teach("Inheritance");