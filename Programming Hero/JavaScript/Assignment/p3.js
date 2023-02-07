//problem 3

/*
this Function returns the difference which is less then 7 and the if the difference is larger than 7 it will double the input and return its value
*/
function isLGSeven(number) {
    // if the input is zero or empty it will through an error
    if(number == 0)
    {
        return "Input number can't be zero or empty"
    }
    const result = number - 7;
    if (result < 7) {
        return result; // returning the result which is less than 7
    }
    else{
        return number * 2; // it will return the double input value if the difference is large than 7 
    }
}

ff = isLGSeven(5);
console.log(ff); 