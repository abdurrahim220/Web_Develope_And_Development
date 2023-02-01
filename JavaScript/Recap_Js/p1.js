const prompt = require('prompt-sync')();
function lessThan100(a, b) {
    if ((a + b) >= 100) {
        return false;
    }
    else return true;
}
var a,b;
a = prompt("enter first value: ");
b = prompt("Enter second value: ");
rt = lessThan100(a, b);

console.log(rt)