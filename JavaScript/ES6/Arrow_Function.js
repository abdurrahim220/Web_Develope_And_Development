// //?Define a function

// function hello() {
//     console.log("Hello World!!");
// }
// hello();

// //!Arrow Functin declaration

// let hello1 = () => console.log("Hello World 1!!!!");
// hello1();


// // ? Parentheses can be avoided when there is single parameter 
// // ! carly braces can be avoied when there is just single statement (don;t work on return)

// let hello2 = (name) => console.log(name);

// hello2("Rahim");

// //! Arrow double parameter 

// let hello3 = (name,dob) =>{
//  console.log(name,dob)
// }

// hello3("Abdur Rahim","22-11-1999");


// //?? Both of them are same

// let getSquare = num => { return num*num }
// let getSquare1 = num => num*num

// console.log(getSquare(4));
// console.log(getSquare1(4));


//!Callback 

number = [1,2,3,4,5,6,7,8,9,10];

// number.forEach(function(item){
//     console.log(item);
// })

// let result = function(item){
//     console.log(item);
// }

//!Arrow Function

let result = (item) => console.log(item);

number.forEach(result);

//? Normal declaration
// function squareAll (item) {
//     return item*item ;
// }

//!Arrow declaratin
squareAll = (item) => item*item;

// let squareNum = number.map(function(item) {
//     return item*item ;
// })
// console.log(squareAll); 

let squareNum = number.map(squareAll)
console.log(squareNum);