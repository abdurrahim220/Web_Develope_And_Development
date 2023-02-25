const numbers = [1, 2, 36, 56, 3, 33];
// const output = [];
// for(const num of numbers){
//     const double = num * 2;
//     output.push(double);
// }

// console.log(output)

function getDouble(num) {
    const output = [];
    for (const num of numbers) {
        const double = doubleIt(num);
        // const double = num * 2;
        output.push(double);
    };
    return output;
}

function doubleItOld(num) {
    return num * 2;
}

const doubleIt = num => num * 2;

const makeDobule = numbers.map(doubleIt);
const makeDobule2 = numbers.map(num => num * 2);
const makeDobule3 = numbers.map(x => x * 2);
console.log(makeDobule);
console.log(makeDobule2);
console.log(makeDobule3);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes)
/*
1.get an array
2.for every elements of the array
3.store the result in an array
4.return the result array
*/

const result = getDouble(numbers);

console.log(result);