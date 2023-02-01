const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     // text += cars[i] + "\n";
//     console.log(cars[i]);
// }

// // console.log(text)

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + "\n";
// }
// console.log(text)

// And you can omit expression 1 (like when your values are set before the loop starts):

let i = 2;
let len = cars.length;
for(;i<len;i++)
{
    console.log(cars[i]);
}