//Regular Expression
//Pattern Matching Technique


let re;
let str;


re = /Hello/;
re = /hello/;
re = /hello/i; //i = case insensitive

console.log(re);
console.log(re.source);
str = "hello World!";
str = "Again hello World!";
str = "hell World!";
str = "sdshellosds World!";
str = "Again hello World! hello";

str = "World"

//exec() - returns result in an array or null
let result = re.exec(str);

//test() --true or false

result = re.test(str)

//Match() -- Returns array or null

str = "Again hello World! hello";

result = str.match(re);

//search() -- returns index of the first mathch or -1
str = "World"
result = str.search(re);


// replace() -- Return new String
str = "Again Hello World!";

let newstr = str.replace(re,"Hi");

console.log(result);
console.log(str);
console.log(re.source);
console.log(newstr);