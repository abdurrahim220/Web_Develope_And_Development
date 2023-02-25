const numbers = [12,5,23,45,11,55,18,17,65,99,75];
const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);

// console.log(fives)
// console.log(fivesAll)

const products =[
    {id:1,name:'laptop',price:455},
    {id:2,name:'mobile',price:4455},
    {id:3,name:'tv',price:4553},
    {id:4,name:'mouse',price:45532},
    {id:5,name:'keybord',price:45523},
    {id:6,name:'laptop2',price:45335}
];

const product = products.find(product => product.price > 10000);
console.log(product)