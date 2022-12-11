//! Rest operator

let fruit = ['apple','green','mango','jackfruit']
let [first,second,...third] = fruit
console.log(first);
console.log(second);
console.log(third);

let person = {
    fname : "Simanta",
    lname : "Paul",
    dob : "8-26-1996",
}

let {fname,...lname} = person
console.log(fname);
console.log(lname);

let moreNumbers = [1,2,3,4,5,6,7,8,9,10];

let test = (name, ...numbers) => { //!! Rest operator when we use ... in funciton
    console.log(name);
    console.log(numbers);
}

test("Simanta",67,4,43,5);
test("Simanta",...moreNumbers); //!! Spread operator when calling the funciton
