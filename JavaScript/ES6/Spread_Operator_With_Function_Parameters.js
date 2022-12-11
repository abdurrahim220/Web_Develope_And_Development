//!Spread Operator .... (split operator)

let numbers = [23,1,2,0,-1,-2]

console.log(Math.max(...numbers)); //Assing parametre

let person = ["Simanta","Paul"];

let test = (fname,lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

// test(person[0],person[1]); //!Normal way

test(...person); //? Spread Operator





