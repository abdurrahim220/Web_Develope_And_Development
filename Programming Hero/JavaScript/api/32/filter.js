const numbers = [10,20,30,11,22,212,22522,55,23,254,455,2153,2264,2244]

const evenNum = numbers.filter(even => even % 2 === 0);
const bigNum = numbers.filter(big => big > 220)
// const biwgNum = numbers.filter(nu)
// console.log(bigNum);
// console.log(evenNum);

const products =[
    {id:1,name:'laptop',price:455},
    {id:2,name:'mobile',price:4455},
    {id:3,name:'tv',price:4553},
    {id:4,name:'mouse',price:45532},
    {id:5,name:'keybord',price:45523},
    {id:6,name:'laptop2',price:45335}
];

// const expensive = products.filter(product => product.price > 100000);
const expensive = products.filter(product => product.price < 1000);
console.log(expensive);