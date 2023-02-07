// Problem 4
/*
    This function will count and return the negative values in an array .. 
*/
function findingBadData(numbers) {
    let count = 0; // initialize the start count to zero 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // in the element array if values are less than 0 .. it will count them
        if (element < 0) {
            count = count + 1;
        }
    }
    return count; // Now returning the count value 
}