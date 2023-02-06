// create function for person object

function Person(first,last,age,eye)
{
this.firstName = first;
this.lastName = last;
this.age = age;
this.eyeColor = eye;
// adding method
this.name = function(){
    return this.firstName+" "+this.lastName;
}

this.nameChange =(name)=>{
    this.lastName = name;
}
// this.nameChange = function(name){
//     this.lastName = name;
// }
}

const myFather = new Person("Md.Shofikur","Rahman",50,"black");

const myMother = new Person("mst.Ismot","Ara",45,"black");

console.log("My father is : "+myFather.age+"\nMy mother is : "+myMother.age);
console.log(myMother.nameChange("Duli"))
console.log(myMother.lastName)

// adding property to object

myFather.nationality = "Bangla";

console.log(myFather)
console.log(myFather.nationality)
console.log(myFather.name())

// Adding a new method to an object

// myFather.name =function(){
//     return this.firstName+ " " + this.lastName;
// }

console.log(myFather.name())

// adding prototype property

Person.prototype.country = "Bangladesh";

console.log(myFather.country);