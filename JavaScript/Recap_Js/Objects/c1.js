// single value
let person = "John Doe"

console.log(person)

const person1 = {
    firstName:"john",lastName:"doe",age:30,eyeColor:"blue",
    fullName:function(){
        return this.firstName+""+this.lastName;
    }
}

console.log(person1)
// console.log()
console.log(typeof(person1))

// add property and values to objects

// const person3 = new Object();
const person3 = {};

person3.firstName="Md.Abdur";
person3.lastName="Rahim";
person3.age="30";
person3.homeTown="Rajshahi";
person3.eyeColor="black";

console.log(person3)


console.log(person3.firstName + person3.age +"Years old!!");
console.log(person3["lastName"] + person3["age"] +"Years old!!");

// for in loop

for (let x in person3)
{
    console.log(x)//properties
    console.log(person3[x]);//values
}

person3.nationality = "Bangladesh";
console.log([person3])

delete person3.nationality;
delete person["age"]
console.log(person3)

const myObj = {
    name:"Rahim",
    age:30,
    cars:{
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}
console.log(myObj)
console.log(myObj.cars.car2)

// Nested arrays and objects

const myObj2 = {
    name:"John",
    age:30,
    cars:[
        {
            name:"Ford",models:["Fiesta","Focus","Mustang"]
        },
        {
            name:"BMW",models:["320","X3","X5"]
        },
        {
            name:"Fiat",models:["500","Panda"]
        }
    ]
}

for (let i in myObj2.cars)
{
    console.log(myObj2.cars[i].name);
    for(let j in myObj2.cars[i].models){
        console.log(myObj2.cars[i].models[j])
    }
}