let re;
let str;

re = /h[ea]llo/; // Must be one of them inside brackets
re = /[HA]llo/i;
re = /[^ha]llo/; //anything excepts those inside brackets
re = /^[ha]ello/; //Must start with h or a 
re = /[a-f]ello/;
re = /[A-Z]ello/; //Start with uper Case
re = /^[A-Z]ello/;//First letter must be upper case
re = /^[a-f]ello/;
re = /^[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; //not digit 
re = /^[0-9][0-9]ello/; //two digit 
re = /^[0-9][0-9][0-9]ello/; //three digit 


// braces {} --quantifer

re = /el{2}o/; //Must occur exactly {n} times
re = /el{3}o/; 
re = /el{2,5}o/; //range
re = /hel{2,}o/; // at least tow time

/*
str = "hello";
str = "Aello";
str = "hello";
str = "aello";
str = "xello";
str = "Xello";
str = "xello";
str = "Xello";
str = "xello";
str = "Again 8ello!";
str = "5gain ello!";
str = "tello!";
str = "32ello!";
str = "helllo!"; */

// Parentheses () -- grouping

re = /^([0-9]){3}/; //[0-9][0-9][0-9] same

re = /^([0-9]x){3}/;

// Bangladeshi Phn Number 
//11 degist
// re = /^01[0-9]{9}$/ ;//$ end sign
// re = /^\+8801[0-9]{9}$/

str = "3234ello"
str = "01711416732";
str = "+8801711416732";
str = "2x3x4x"
console.log(re.exec(str));
csqg(re,str);
function csqg(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re}`);
    }
    else {
        console.log(`'${str}' dosen't matches '${re}`);
    }
}