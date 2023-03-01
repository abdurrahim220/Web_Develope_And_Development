// const first = {};
// const first = {a:5};
// const first = {a:2};
// const second = {a:5};
// const second = {};
// const second = {a:2};
// const third = second;

// if (first === second) {
// if (third === second) {
//     console.log('they are same')
// }

// else
//     console.log('different')



// do not use this method to compare object or array



const first = { a: 5, b: 3, d: 4 };
const firstString = JSON.stringify(first);
const second = { a: 5, b: 3, c: 4 };
const secondString = JSON.stringify(second);

// console.log(firstString, secondString);

// if (firstString === secondString) console.log('same');
// else console.log('different');


// function object

function compare(first, second) {

    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if (firstKey.length === secondKey.length) {
        for (const key of firstKey) {
            if (first[key] !== second[key]) return false

        }
        return true;
    }
    else { return false; }
}

const isSame = compare(first, second);
console.log(isSame)