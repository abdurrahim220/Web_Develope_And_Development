//Normal declaration

function saySomething(name)
{
    console.log(`"hello World!!"` + name);
}

//function expression 
let saySomething1 = function(name2) {
    console.log(`"Hello World again!"` + name2);
}

saySomething("Bohubrihi");
saySomething1("Saimanta");


//arrow function (es6)

let saySomething2 = (name3 , name4) => {
    console.log("I am an arrow function!"+name3+name4);
}

saySomething2("javaScript"," ES6");