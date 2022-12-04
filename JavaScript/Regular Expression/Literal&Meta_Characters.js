/*let re;
let str;
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /jo w/i;
re = /low/i;

///meta characters

re = /^hello/i; //must start with ^
re = /^hello$/; //must End with ^
re = /^hello$/;
re = /^hello$/;//must start and end with same
re = /^h.llo$/;//Matches any one character
re = /h.llo/;
re = /h*llo/;//0 or more time
re = /he?a?llo/; //optional
re = /hello\?/ ;//escaping


str = "hello World!"
str = "hello hello"
str = "hello"
str = "hallo"
str = "h llo"
str = "hllo"
str = "Hillo World"
str = "hello World"
str = "hillo";
str = "hilo";
str = "h35564654fd";
str = "hello";
str = "hllo";
str = "hallo";
str = "htllo";
str = "heallo";
str = "hell";
str = "hello?";


// str = "Hello World!";

console.log(re.exec(str));

reTest(re, str);

function reTest(re,str) {
    if(re.test(str)) {
        console.log(`'${str}' Matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' Dosen't match '${re.source}'`);
    }
}*/