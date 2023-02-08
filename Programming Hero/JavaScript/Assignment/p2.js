//Problem 2
/*
this function will count string number and then the size of string % by 2 .. if the modulus is == 0 it will return even
*/
function evenOdd(numStr) {

    if (numStr.length % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(evenOdd(7))