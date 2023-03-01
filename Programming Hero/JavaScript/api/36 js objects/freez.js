const bottle = {
    color: 'yellow', price: 50, isCleaned: true, capacity: 1
};

const keys = Object.keys(bottle);
const keys2 = Object.values(bottle);
// console.log(keys);
// console.log(keys2);
const pair = Object.entries(bottle)
// console.log(pair);//two dimenson

// const twoDimenson = [
//     ['color', 'yellow'],
//     ['price', 50],
//     ['isCleaned', true],
//     ['capacity', 1]
// ]

console.log(bottle);

// Object.seal(bottle)

Object.freeze(bottle)

delete bottle.isCleaned;

bottle.price = 100; // value change
bottle.height = 12; // add extra property and value
console.log(bottle)


