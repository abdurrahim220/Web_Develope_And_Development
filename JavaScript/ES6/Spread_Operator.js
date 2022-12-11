//? Spread Operator

let str = "Bohubrihi";
let newStr = [...str];

// console.log(newStr);

let fruit1 = ["Apple","Pine-apple","Mango"];
let fruit2 = ["Orange","Grape"];
let newFruit = ["Jackfruit"];

let newArr = [...fruit1,...fruit2,...newFruit];

console.log(newArr);

//! Spread on Object

let person = {
    fname : "Abdur",
    lname : "Rahim"
}
let newPerson = {...person, dob:"22-11-1999"}
console.log(newPerson);