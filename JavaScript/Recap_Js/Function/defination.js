const prompt = require('prompt-sync')();

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Md.Abdur",
    lastName: "Rahim"
}
const person2 = {
    firstName: "Md.Rafik",
    lastName: "Uddin"
}

name = person.fullName.call(person1);
name1 = person.fullName.apply(person2);
console.log(name);
console.log(name1);
console.log
    (Math.max.apply(null,[1, 2, 3]))
