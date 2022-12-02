//Math object
/*
let val;
val = Math.PI;
val = Math.E;
val = Math.round(3.1);
val = Math.ceil(1.1);
val = Math.floor(1.9);
val = Math.sqrt(81);
val = Math.abs(-81);
val = Math.pow(2,4);
val = Math.min(1,8,-8,1,0)
val = Math.max(1,8,-8,1,0)
val = Math.random()
val = Math.floor(Math.random()*100+1);
console.log(val);
*/


let val;
let today = new Date();

let birthday = new Date(`08-26-1996 11:25:27`)
birthday = new Date(`August 26 1996`);
birthday = new Date(`8/26/1996`)

val = today;
val = today.toString();

val = birthday;
val = today.getMonth();
val = today.getDate();
today = today.getDay();
// today = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime();
//timestamp => amount of seconds past since 1st jan 1070

birthday.setMonth(2)

console.log(birthday);