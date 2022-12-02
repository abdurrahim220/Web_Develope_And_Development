//var and let and const
//let and const (es6)
/* 
var a = 10;
a = a+7;
var a;

let b = 6;
b = b*67;

const c = 7;
*/ 


var a = 1;
let b = 3;
const c = 5;

// var d = 10;


console.log(`Global Scope: ` ,a,b,c);

function test() //local space
{
    var a = 6;
    let b = 7;
    const c = 9;
    var d = 10;
    console.log(`Function Scope: `,a,b,c,d);
}
test();


console.log(`Global Scope: ` ,a,b,c);

if(true)
{
    var a = 11;
    let b = 12;
    const c = 14;
    console.log(`If scope : `,a,b,c);
}

console.log(`Global Scope: ` ,a,b,c); //var will change ..but let and const will not change


for(var a=0;a<10;a++)
{
    console.log(`Loop: `,a);
}
console.log(`Global Scope: ` ,a,b,c);