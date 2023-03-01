const numbers = [10,12,54,6,56,60];

// for (const number of numbers){
//     console.log(number)
// }


// for of can't be use on objects 
const bottle = {
    color: 'yellow', price: 50, isCleaned: true, capacity: 1
};

// for(const pro of bottle){
//     console.log(pro)
// }
// first option to loop through an object
const keys = Object.keys(bottle);
console.log(keys);
/*
3 ways to read object properties
1.bottle.color
2.bottle['color']
3.bottle[key]
*/
for(const key of keys){
    // console.log(key);
    // console.log(key,bottle[key]);
}

// for in loop

for(const key in bottle){
    // console.log(key);
    // console.log(key,bottle[key]);
    const values = bottle[key];
    // console.log(key,values);
}

// advanced

const pair = Object.entries(bottle);

// console.log(pair)

for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}

