//JSON.stringify() --> Js object to JSON String
//JSON.parse() --> JSON String to JS Object

var parson1 = {
   "name" : "Rahim",
    "age" : 25,
    "hometown" : "Dhaka",
    "married" : false,
}

var person1_json = JSON.stringify(parson1);
// var person1_obj = JSON.parse(parson1_json);
var person1_obj = JSON.parse(person1_json);

console.log(person1_obj)
console.log(parson1.age)