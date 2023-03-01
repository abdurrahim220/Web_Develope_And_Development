// create objects using objects literals

const player = {}

player.name = 'Small Nirob';
player.specialty = 'batsman';

player.bat = function () {
    console.log("Swing your bat");
}
// console.log(player);

// player.bat();



const Student = {
    name:"panday",
    job:"khai anday",
    ball : function(){
        console.log("Throw the ball")
    },
    salary :20000
}

// 2. objects constructor

const person = new Object();
// console.log(person)

// 3. object create method

// const item = Object.create(null)
const atel = Object.create(Student)
// console.log(atel)
// console.log(atel.friend)
// console.log(atel.name)
// console.log(item)

// 4.class

class Person {
    name = "Abdul";
    address = "sodor ghat";
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
// console.log(person1)

// 5. function

function Car (model,price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('tesla',20);
console.log(tesla)