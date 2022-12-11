//? ES5  constructor
/*
function Person (age ,name) {
    this.age = age;
    this.name = name;
}
Person.prototype.getName = function() {
    console.log(this.name);
}
*/



//!ES6
class Person {
    constructor(age,name) {
        this.age = age;
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

let person1 = new Person(24,"Rahim");

console.log(person1);
console.log(person1.getName());