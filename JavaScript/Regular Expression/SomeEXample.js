let re;
let str;

//Postal code
//4700 4000
re = /^[0-9]{4}$/;
str = "4000"


//phone number --->> 01711416132 //+8801740846112 
re = /^(\+)?(88)?01[0-9]{9}$/
str = "01711416132"

//Email address
//abdurrahim.learn@edu.com.bd

re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]?/;

str = "abdurrahim5@gmail.com" ;

console.log(re.test(str));