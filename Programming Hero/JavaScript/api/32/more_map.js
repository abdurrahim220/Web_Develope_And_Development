const numbers = [10, 20, 30, 40, 50];

const output = [];
for (const num of numbers) {
    // console.log(num);
    const double = num * 2;
    output.push(double);
    // console.log'(output)
}
// console.log(output)

const half = numbers.map(n => n / 2);
// console.log(half);
const names = ['tomas', 'tom cruze', 'abdur rahim'];

// names.forEach(name => console.log(name))

const firstLater = names.map(name => name[0]);
const nameLength = names.map(len => len.length)
// console.log(firstLater)
// console.log(nameLength)

const products =[
    {id:1,name:'laptop',price:455},
    {id:1,name:'mobile',price:4455},
    {id:1,name:'tv',price:4553},
    {id:1,name:'mouse',price:45532},
    {id:1,name:'keybord',price:45523},
    {id:1,name:'laptop2',price:45335}
];

// const items = products.map(product => console.log(product.name));

const items = products.map(product => product.name);
const price = products.map(p=>p.price);
// console.log(price)
// console.log(items)