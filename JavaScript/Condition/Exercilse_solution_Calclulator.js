console.log("Select an option: \n 1. ADD \n 2. Substract \n 3. Mulitply \n 4. Divide");
var a = prompt("Enter First Number: ");

var b = prompt("Enter Second Number: ");

var result = null;
var option;

a = parseInt(a);
b = parseInt(b);
option = parseInt(option);

var aCon = isNaN(a);
var bCon = isNaN(b);
var optionCon = isNaN(option);

if (aCon || bCon || optionCon) {
    console.log("Invalid Input!!");
}
else {
    switch(option) {
        case 1:
            result = a + b;
            break;
        case 2:
            result = a - b;
            break;
        case 3:
            result = a * b;
            break;
        case 4:
            result = a / b;
            break;
        default:
            break;
    }
    if(result == null)
    {
        console.log("No Result!!!");
    }
    else{
        console.log("Reslult : " + result);
    }
}