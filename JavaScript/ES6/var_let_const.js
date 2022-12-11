//?var let and const

//?let and const (es6)

/*
var a = 10
a += 7;

var a ; //!var can be declartion as much as possible

let b = 6;
b *= 67;
const c = 7; //!const can be declartion as cann't be change

*/

//? Globla Scope

var a = 1
let b = 2
const c  = 3
// var d = 10; 

console.log(`Global Scope: `,a,b,c)

function test() {
    var a = 4;
    let b = 5; //?local space
    const c = 6;

    console.log(`Functions Scope: `,a,b,c);
}

//? local scope can be assessed by golobal scope in functin...

test();

console.log(`Global Scope: `,a,b,c)


if(true) {
    var a = 7;
    let b = 8;
    const c = 9;

    console.log('IF scope: ',a,b,c);
}

console.log(`Global Scope: `,a,b,c)


for(var a = 0; a<10 ;a++)
{
    console.log(`loop : `,a);
}

console.log(`Global Scope: `,a,b,c)
