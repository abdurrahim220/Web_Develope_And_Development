//Shorthand Character classes
let re;
let str;
re = /\w/ // world character - alpha numberc or __
re = /\w+/ //one or more
re = /\w/ //Non word character
re = /\d/; //Digit
re = /\d+/;
re = /\D/; //Non digit
re = /\s/ ; //Match with space
re = /\S / ; //Match non white space
re = /Hello\b/ ; //Word Boundary
re = /\bHello\b/ ; //Word Boundary

// Assertions

re = /x(x?=yz)/; // Matches x only if x is before y
re = /x(x?!yz)/; // Matches x only if x is before y

str = "(*&v^y8)";
str = "kjfhskjd";
str = "89 08";
str = " ";
str = "Hello jikji";

str = "sdfxyzfkldsfuy"



console.log(re.exec(str));
scass(re,str);
function scass(re, str) {
    if (re.test(str)) {
        console.log(`'${str} mathces '${re}'`);
    }
    else {
        console.log(`'${str} dosen't mathces '${re}'`);
    }
}